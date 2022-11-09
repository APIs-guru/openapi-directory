import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1LoggingConfig
/** 
 * Defines logging behavior for conversation lifecycle events.
**/
export class GoogleCloudDialogflowV2beta1LoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;
}
