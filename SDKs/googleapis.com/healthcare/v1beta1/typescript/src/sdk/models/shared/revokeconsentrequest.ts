import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RevokeConsentRequest
/** 
 * Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed.
**/
export class RevokeConsentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: string;
}
