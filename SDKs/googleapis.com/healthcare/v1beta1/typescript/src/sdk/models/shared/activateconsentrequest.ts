import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivateConsentRequest
/** 
 * Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the given Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in the `REJECTED` or `REVOKED` state.
**/
export class ActivateConsentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
