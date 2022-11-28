import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1FulfillmentGenericWebService
/** 
 * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers. More information could be found at: https://cloud.google.com/dialogflow/docs/fulfillment-configure.
**/
export class GoogleCloudDialogflowV2beta1FulfillmentGenericWebService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isCloudFunction" })
  isCloudFunction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=requestHeaders" })
  requestHeaders?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
