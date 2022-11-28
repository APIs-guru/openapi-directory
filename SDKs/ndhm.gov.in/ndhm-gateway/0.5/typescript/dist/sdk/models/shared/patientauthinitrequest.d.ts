import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { PatientAuthRequester } from "./patientauthrequester";
export declare class PatientAuthInitRequestQuery extends SpeakeasyBase {
    authMode?: AuthenticationModeEnum;
    id: string;
    purpose: PatientAuthPurposeEnum;
    requester: PatientAuthRequester;
}
export declare class PatientAuthInitRequest extends SpeakeasyBase {
    query: PatientAuthInitRequestQuery;
    requestId: string;
    timestamp: Date;
}
