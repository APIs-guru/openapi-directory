import { SpeakeasyBase } from "../../../internal/utils";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { PatientAuthRequester } from "./patientauthrequester";
export declare class AccessTokenValidity extends SpeakeasyBase {
    expiry: Date;
    limit: number;
    purpose: PatientAuthPurposeEnum;
    requester: PatientAuthRequester;
}
