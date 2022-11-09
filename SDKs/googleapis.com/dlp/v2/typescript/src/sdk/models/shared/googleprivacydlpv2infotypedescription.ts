import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2InfoTypeCategory } from "./googleprivacydlpv2infotypecategory";
import { GooglePrivacyDlpV2VersionDescription } from "./googleprivacydlpv2versiondescription";

export enum GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum {
    EnumTypeUnspecified = "ENUM_TYPE_UNSPECIFIED"
,    Inspect = "INSPECT"
,    RiskAnalysis = "RISK_ANALYSIS"
}


// GooglePrivacyDlpV2InfoTypeDescription
/** 
 * InfoType description.
**/
export class GooglePrivacyDlpV2InfoTypeDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.GooglePrivacyDlpV2InfoTypeCategory })
  categories?: GooglePrivacyDlpV2InfoTypeCategory[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=supportedBy" })
  supportedBy?: GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum[];

  @Metadata({ data: "json, name=versions", elemType: shared.GooglePrivacyDlpV2VersionDescription })
  versions?: GooglePrivacyDlpV2VersionDescription[];
}
