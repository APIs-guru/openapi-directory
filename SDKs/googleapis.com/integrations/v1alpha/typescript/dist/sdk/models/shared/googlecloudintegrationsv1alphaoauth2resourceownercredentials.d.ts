import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";
export declare enum GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum {
    RequestTypeUnspecified = "REQUEST_TYPE_UNSPECIFIED",
    RequestBody = "REQUEST_BODY",
    QueryParameters = "QUERY_PARAMETERS",
    EncodedHeader = "ENCODED_HEADER"
}
/**
 * For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token.
**/
export declare class GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials extends SpeakeasyBase {
    accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;
    clientId?: string;
    clientSecret?: string;
    password?: string;
    requestType?: GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum;
    scope?: string;
    tokenEndpoint?: string;
    tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
    username?: string;
}
