import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview } from "./googlefactcheckingfactchecktoolsv1alpha1claimreview";
/**
 * Information about the claim.
**/
export declare class GoogleFactcheckingFactchecktoolsV1alpha1Claim extends SpeakeasyBase {
    claimDate?: string;
    claimReview?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[];
    claimant?: string;
    text?: string;
}
