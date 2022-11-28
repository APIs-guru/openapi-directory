import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";
export declare enum GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum {
    RequestTypeUnspecified = "REQUEST_TYPE_UNSPECIFIED",
    RequestBody = "REQUEST_BODY",
    QueryParameters = "QUERY_PARAMETERS",
    EncodedHeader = "ENCODED_HEADER"
}
/**
 * The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.
**/
export declare class GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode extends SpeakeasyBase {
    accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;
    applyReauthPolicy?: boolean;
    authCode?: string;
    authEndpoint?: string;
    authParams?: GoogleCloudIntegrationsV1alphaParameterMap;
    clientId?: string;
    clientSecret?: string;
    requestType?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum;
    scope?: string;
    tokenEndpoint?: string;
    tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
}
