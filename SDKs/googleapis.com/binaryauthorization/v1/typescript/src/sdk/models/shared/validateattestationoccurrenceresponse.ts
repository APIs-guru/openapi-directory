import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ValidateAttestationOccurrenceResponseResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED",
    Verified = "VERIFIED",
    AttestationNotVerifiable = "ATTESTATION_NOT_VERIFIABLE"
}


// ValidateAttestationOccurrenceResponse
/** 
 * Response message for ValidationHelperV1.ValidateAttestationOccurrence.
**/
export class ValidateAttestationOccurrenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=denialReason" })
  denialReason?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ValidateAttestationOccurrenceResponseResultEnum;
}
