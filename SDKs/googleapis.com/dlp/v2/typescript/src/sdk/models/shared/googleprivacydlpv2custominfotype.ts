import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2DetectionRule } from "./googleprivacydlpv2detectionrule";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
import { GooglePrivacyDlpV2StoredType } from "./googleprivacydlpv2storedtype";

export enum GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum {
    ExclusionTypeUnspecified = "EXCLUSION_TYPE_UNSPECIFIED"
,    ExclusionTypeExclude = "EXCLUSION_TYPE_EXCLUDE"
}

export enum GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED"
,    VeryUnlikely = "VERY_UNLIKELY"
,    Unlikely = "UNLIKELY"
,    Possible = "POSSIBLE"
,    Likely = "LIKELY"
,    VeryLikely = "VERY_LIKELY"
}


// GooglePrivacyDlpV2CustomInfoType
/** 
 * Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
**/
export class GooglePrivacyDlpV2CustomInfoType extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectionRules", elemType: shared.GooglePrivacyDlpV2DetectionRule })
  detectionRules?: GooglePrivacyDlpV2DetectionRule[];

  @Metadata({ data: "json, name=dictionary" })
  dictionary?: GooglePrivacyDlpV2Dictionary;

  @Metadata({ data: "json, name=exclusionType" })
  exclusionType?: GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;

  @Metadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;

  @Metadata({ data: "json, name=likelihood" })
  likelihood?: GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;

  @Metadata({ data: "json, name=regex" })
  regex?: GooglePrivacyDlpV2Regex;

  @Metadata({ data: "json, name=storedType" })
  storedType?: GooglePrivacyDlpV2StoredType;

  @Metadata({ data: "json, name=surrogateType" })
  surrogateType?: Map<string, any>;
}
