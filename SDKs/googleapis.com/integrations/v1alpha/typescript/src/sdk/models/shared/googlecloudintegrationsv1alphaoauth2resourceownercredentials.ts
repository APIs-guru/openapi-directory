import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";


export enum GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum {
    RequestTypeUnspecified = "REQUEST_TYPE_UNSPECIFIED",
    RequestBody = "REQUEST_BODY",
    QueryParameters = "QUERY_PARAMETERS",
    EncodedHeader = "ENCODED_HEADER"
}


// GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials
/** 
 * For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token.
**/
export class GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=requestType" })
  requestType?: GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenEndpoint" })
  tokenEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenParams" })
  tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
