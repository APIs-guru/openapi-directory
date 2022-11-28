import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ValidateAttestationOccurrenceResponseResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED",
    Verified = "VERIFIED",
    AttestationNotVerifiable = "ATTESTATION_NOT_VERIFIABLE"
}
/**
 * Response message for ValidationHelperV1.ValidateAttestationOccurrence.
**/
export declare class ValidateAttestationOccurrenceResponse extends SpeakeasyBase {
    denialReason?: string;
    result?: ValidateAttestationOccurrenceResponseResultEnum;
}
