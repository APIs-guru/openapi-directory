import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";
export declare enum GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum {
    RequestTypeUnspecified = "REQUEST_TYPE_UNSPECIFIED",
    RequestBody = "REQUEST_BODY",
    QueryParameters = "QUERY_PARAMETERS",
    EncodedHeader = "ENCODED_HEADER"
}
/**
 * For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token.
**/
export declare class GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials extends SpeakeasyBase {
    accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;
    clientId?: string;
    clientSecret?: string;
    requestType?: GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum;
    scope?: string;
    tokenEndpoint?: string;
    tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
}
