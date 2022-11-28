import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttestationOccurrence } from "./attestationoccurrence";



// ValidateAttestationOccurrenceRequest
/** 
 * Request message for ValidationHelperV1.ValidateAttestationOccurrence.
**/
export class ValidateAttestationOccurrenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: AttestationOccurrence;

  @SpeakeasyMetadata({ data: "json, name=occurrenceNote" })
  occurrenceNote?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrenceResourceUri" })
  occurrenceResourceUri?: string;
}
