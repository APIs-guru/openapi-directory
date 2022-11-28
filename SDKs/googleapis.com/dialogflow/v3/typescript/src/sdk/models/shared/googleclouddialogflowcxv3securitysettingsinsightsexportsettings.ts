import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings
/** 
 * Settings for exporting conversations to [Insights](https://cloud.google.com/contact-center/insights/docs).
**/
export class GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableInsightsExport" })
  enableInsightsExport?: boolean;
}
