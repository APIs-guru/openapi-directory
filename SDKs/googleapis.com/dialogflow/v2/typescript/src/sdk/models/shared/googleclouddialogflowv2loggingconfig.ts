import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2LoggingConfig
/** 
 * Defines logging behavior for conversation lifecycle events.
**/
export class GoogleCloudDialogflowV2LoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;
}
