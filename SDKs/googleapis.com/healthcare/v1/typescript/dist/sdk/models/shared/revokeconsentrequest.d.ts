import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed.
**/
export declare class RevokeConsentRequest extends SpeakeasyBase {
    consentArtifact?: string;
}
