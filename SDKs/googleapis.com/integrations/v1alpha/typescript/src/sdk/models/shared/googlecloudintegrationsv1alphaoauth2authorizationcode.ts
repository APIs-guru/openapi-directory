import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";

export enum GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum {
    RequestTypeUnspecified = "REQUEST_TYPE_UNSPECIFIED"
,    RequestBody = "REQUEST_BODY"
,    QueryParameters = "QUERY_PARAMETERS"
,    EncodedHeader = "ENCODED_HEADER"
}


// GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode
/** 
 * The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.
**/
export class GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;

  @Metadata({ data: "json, name=applyReauthPolicy" })
  applyReauthPolicy?: boolean;

  @Metadata({ data: "json, name=authCode" })
  authCode?: string;

  @Metadata({ data: "json, name=authEndpoint" })
  authEndpoint?: string;

  @Metadata({ data: "json, name=authParams" })
  authParams?: GoogleCloudIntegrationsV1alphaParameterMap;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=requestType" })
  requestType?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=tokenEndpoint" })
  tokenEndpoint?: string;

  @Metadata({ data: "json, name=tokenParams" })
  tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
}
