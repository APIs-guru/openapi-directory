import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ValidateAttestationOccurrenceResponseResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED"
,    Verified = "VERIFIED"
,    AttestationNotVerifiable = "ATTESTATION_NOT_VERIFIABLE"
}


// ValidateAttestationOccurrenceResponse
/** 
 * Response message for ValidationHelperV1.ValidateAttestationOccurrence.
**/
export class ValidateAttestationOccurrenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=denialReason" })
  denialReason?: string;

  @Metadata({ data: "json, name=result" })
  result?: ValidateAttestationOccurrenceResponseResultEnum;
}
