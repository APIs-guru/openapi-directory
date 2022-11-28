import { SpeakeasyBase } from "../../../internal/utils";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
export declare enum PatientAuthModeQueryRequestQueryRequesterTypeEnum {
    Hip = "HIP",
    Hiu = "HIU"
}
export declare class PatientAuthModeQueryRequestQueryRequester extends SpeakeasyBase {
    id: string;
    type: PatientAuthModeQueryRequestQueryRequesterTypeEnum;
}
export declare class PatientAuthModeQueryRequestQuery extends SpeakeasyBase {
    id: string;
    purpose: PatientAuthPurposeEnum;
    requester: PatientAuthModeQueryRequestQueryRequester;
}
export declare class PatientAuthModeQueryRequest extends SpeakeasyBase {
    query: PatientAuthModeQueryRequestQuery;
    requestId: string;
    timestamp: Date;
}
