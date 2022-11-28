import { SpeakeasyBase } from "../../../internal/utils";
import { AttestationOccurrence } from "./attestationoccurrence";
/**
 * Request message for ValidationHelperV1.ValidateAttestationOccurrence.
**/
export declare class ValidateAttestationOccurrenceRequest extends SpeakeasyBase {
    attestation?: AttestationOccurrence;
    occurrenceNote?: string;
    occurrenceResourceUri?: string;
}
