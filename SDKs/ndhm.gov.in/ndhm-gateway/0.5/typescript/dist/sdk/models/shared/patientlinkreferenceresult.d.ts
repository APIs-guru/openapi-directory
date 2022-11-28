import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { Meta } from "./meta";
import { RequestReference } from "./requestreference";
export declare enum PatientLinkReferenceResultLinkAuthenticationTypeEnum {
    Direct = "DIRECT",
    Mediated = "MEDIATED"
}
export declare class PatientLinkReferenceResultLink extends SpeakeasyBase {
    authenticationType: PatientLinkReferenceResultLinkAuthenticationTypeEnum;
    meta?: Meta;
    referenceNumber: string;
}
export declare class PatientLinkReferenceResult extends SpeakeasyBase {
    error?: Error;
    link?: PatientLinkReferenceResultLink;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
    transactionId: string;
}
