import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CustomInfoType } from "./googleprivacydlpv2custominfotype";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2FindingLimits } from "./googleprivacydlpv2findinglimits";
import { GooglePrivacyDlpV2InspectionRuleSet } from "./googleprivacydlpv2inspectionruleset";


export enum GooglePrivacyDlpV2InspectConfigContentOptionsEnum {
    ContentUnspecified = "CONTENT_UNSPECIFIED",
    ContentText = "CONTENT_TEXT",
    ContentImage = "CONTENT_IMAGE"
}

export enum GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}


// GooglePrivacyDlpV2InspectConfig
/** 
 * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
**/
export class GooglePrivacyDlpV2InspectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentOptions" })
  contentOptions?: GooglePrivacyDlpV2InspectConfigContentOptionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=customInfoTypes", elemType: GooglePrivacyDlpV2CustomInfoType })
  customInfoTypes?: GooglePrivacyDlpV2CustomInfoType[];

  @SpeakeasyMetadata({ data: "json, name=excludeInfoTypes" })
  excludeInfoTypes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeQuote" })
  includeQuote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=infoTypes", elemType: GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];

  @SpeakeasyMetadata({ data: "json, name=limits" })
  limits?: GooglePrivacyDlpV2FindingLimits;

  @SpeakeasyMetadata({ data: "json, name=minLikelihood" })
  minLikelihood?: GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleSet", elemType: GooglePrivacyDlpV2InspectionRuleSet })
  ruleSet?: GooglePrivacyDlpV2InspectionRuleSet[];
}
