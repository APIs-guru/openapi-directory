import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3WebhookGenericWebService } from "./googleclouddialogflowcxv3webhookgenericwebservice";


// GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig
/** 
 * Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
**/
export class GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=genericWebService" })
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
