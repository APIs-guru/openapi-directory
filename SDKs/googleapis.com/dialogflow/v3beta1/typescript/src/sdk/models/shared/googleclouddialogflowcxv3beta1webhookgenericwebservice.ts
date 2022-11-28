import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1WebhookGenericWebService
/** 
 * Represents configuration for a generic web service.
**/
export class GoogleCloudDialogflowCxV3beta1WebhookGenericWebService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedCaCerts" })
  allowedCaCerts?: string[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=requestHeaders" })
  requestHeaders?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
