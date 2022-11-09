import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1WebhookGenericWebService
/** 
 * Represents configuration for a generic web service.
**/
export class GoogleCloudDialogflowCxV3beta1WebhookGenericWebService extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedCaCerts" })
  allowedCaCerts?: string[];

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=requestHeaders" })
  requestHeaders?: Map<string, string>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
