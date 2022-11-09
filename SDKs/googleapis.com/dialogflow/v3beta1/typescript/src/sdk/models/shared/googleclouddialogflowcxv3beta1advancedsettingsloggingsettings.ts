import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings
/** 
 * Define behaviors on logging.
**/
export class GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableInteractionLogging" })
  enableInteractionLogging?: boolean;

  @Metadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;
}
