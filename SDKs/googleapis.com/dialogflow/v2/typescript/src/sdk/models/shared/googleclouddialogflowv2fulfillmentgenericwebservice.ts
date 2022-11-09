import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2FulfillmentGenericWebService
/** 
 * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers. More information could be found at: https://cloud.google.com/dialogflow/docs/fulfillment-configure.
**/
export class GoogleCloudDialogflowV2FulfillmentGenericWebService extends SpeakeasyBase {
  @Metadata({ data: "json, name=isCloudFunction" })
  isCloudFunction?: boolean;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=requestHeaders" })
  requestHeaders?: Map<string, string>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
