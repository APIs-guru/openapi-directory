import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings
/** 
 * Define behaviors on logging.
**/
export class GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableInteractionLogging" })
  enableInteractionLogging?: boolean;

  @Metadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;
}
