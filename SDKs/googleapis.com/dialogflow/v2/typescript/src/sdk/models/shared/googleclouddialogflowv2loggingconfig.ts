import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2LoggingConfig
/** 
 * Defines logging behavior for conversation lifecycle events.
**/
export class GoogleCloudDialogflowV2LoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;
}
