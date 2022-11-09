import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";

export enum GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum {
    RequestTypeUnspecified = "REQUEST_TYPE_UNSPECIFIED"
,    RequestBody = "REQUEST_BODY"
,    QueryParameters = "QUERY_PARAMETERS"
,    EncodedHeader = "ENCODED_HEADER"
}


// GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials
/** 
 * For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token.
**/
export class GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=requestType" })
  requestType?: GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=tokenEndpoint" })
  tokenEndpoint?: string;

  @Metadata({ data: "json, name=tokenParams" })
  tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
}
