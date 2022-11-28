import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RejectConsentRequest
/** 
 * Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed.
**/
export class RejectConsentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: string;
}
