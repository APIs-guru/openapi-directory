import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}


// GooglePrivacyDlpV2LikelihoodAdjustment
/** 
 * Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.
**/
export class GooglePrivacyDlpV2LikelihoodAdjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedLikelihood" })
  fixedLikelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum;

  @Metadata({ data: "json, name=relativeLikelihood" })
  relativeLikelihood?: number;
}
