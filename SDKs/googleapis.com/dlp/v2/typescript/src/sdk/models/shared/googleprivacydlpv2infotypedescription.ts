import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeCategory } from "./googleprivacydlpv2infotypecategory";
import { GooglePrivacyDlpV2SensitivityScore } from "./googleprivacydlpv2sensitivityscore";
import { GooglePrivacyDlpV2VersionDescription } from "./googleprivacydlpv2versiondescription";


export enum GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum {
    EnumTypeUnspecified = "ENUM_TYPE_UNSPECIFIED",
    Inspect = "INSPECT",
    RiskAnalysis = "RISK_ANALYSIS"
}


// GooglePrivacyDlpV2InfoTypeDescription
/** 
 * InfoType description.
**/
export class GooglePrivacyDlpV2InfoTypeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: GooglePrivacyDlpV2InfoTypeCategory })
  categories?: GooglePrivacyDlpV2InfoTypeCategory[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sensitivityScore" })
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;

  @SpeakeasyMetadata({ data: "json, name=supportedBy" })
  supportedBy?: GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum[];

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: GooglePrivacyDlpV2VersionDescription })
  versions?: GooglePrivacyDlpV2VersionDescription[];
}
