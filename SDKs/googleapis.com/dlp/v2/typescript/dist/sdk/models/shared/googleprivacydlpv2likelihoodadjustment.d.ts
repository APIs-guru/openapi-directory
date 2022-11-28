import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.
**/
export declare class GooglePrivacyDlpV2LikelihoodAdjustment extends SpeakeasyBase {
    fixedLikelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;
    relativeLikelihood?: number;
}
