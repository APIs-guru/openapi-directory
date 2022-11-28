import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";



// GooglePrivacyDlpV2InspectTemplateInput
/** 
 * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
export class GooglePrivacyDlpV2InspectTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;
}


// GooglePrivacyDlpV2InspectTemplate
/** 
 * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
export class GooglePrivacyDlpV2InspectTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
