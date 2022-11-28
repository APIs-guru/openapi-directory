import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
export declare enum PatientAuthInitRequestQueryRequesterTypeEnum {
    Hip = "HIP",
    Hiu = "HIU"
}
/**
 * identification of requester
**/
export declare class PatientAuthInitRequestQueryRequester extends SpeakeasyBase {
    id: string;
    type: PatientAuthInitRequestQueryRequesterTypeEnum;
}
export declare class PatientAuthInitRequestQuery extends SpeakeasyBase {
    authMode?: AuthenticationModeEnum;
    id: string;
    purpose: PatientAuthPurposeEnum;
    requester: PatientAuthInitRequestQueryRequester;
}
export declare class PatientAuthInitRequest extends SpeakeasyBase {
    query: PatientAuthInitRequestQuery;
    requestId: string;
    timestamp: Date;
}
