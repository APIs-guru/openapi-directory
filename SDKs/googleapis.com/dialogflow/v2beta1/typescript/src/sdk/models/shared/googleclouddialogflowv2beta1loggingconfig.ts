import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1LoggingConfig
/** 
 * Defines logging behavior for conversation lifecycle events.
**/
export class GoogleCloudDialogflowV2beta1LoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;
}
