import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1WebhookGenericWebService } from "./googleclouddialogflowcxv3beta1webhookgenericwebservice";


// GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig
/** 
 * Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
**/
export class GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=genericWebService" })
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
