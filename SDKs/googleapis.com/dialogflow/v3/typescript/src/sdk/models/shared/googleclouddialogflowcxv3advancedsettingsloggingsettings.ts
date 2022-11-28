import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings
/** 
 * Define behaviors on logging.
**/
export class GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableInteractionLogging" })
  enableInteractionLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;
}
