import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3WebhookGenericWebService } from "./googleclouddialogflowcxv3webhookgenericwebservice";



// GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig
/** 
 * Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
**/
export class GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=genericWebService" })
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
