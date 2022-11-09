import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttestationOccurrence } from "./attestationoccurrence";


// ValidateAttestationOccurrenceRequest
/** 
 * Request message for ValidationHelperV1.ValidateAttestationOccurrence.
**/
export class ValidateAttestationOccurrenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestation" })
  attestation?: AttestationOccurrence;

  @Metadata({ data: "json, name=occurrenceNote" })
  occurrenceNote?: string;

  @Metadata({ data: "json, name=occurrenceResourceUri" })
  occurrenceResourceUri?: string;
}
