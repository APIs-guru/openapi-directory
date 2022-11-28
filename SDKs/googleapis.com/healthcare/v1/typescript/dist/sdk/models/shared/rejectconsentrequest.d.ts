import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed.
**/
export declare class RejectConsentRequest extends SpeakeasyBase {
    consentArtifact?: string;
}
