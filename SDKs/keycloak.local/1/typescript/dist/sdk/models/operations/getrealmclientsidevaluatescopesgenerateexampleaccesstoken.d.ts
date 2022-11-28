import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryParams extends SpeakeasyBase {
    scope?: string;
    userId?: string;
}
export declare class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenPathParams;
    queryParams: GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryParams;
}
export declare class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse extends SpeakeasyBase {
    accessToken?: shared.AccessToken;
    contentType: string;
    statusCode: number;
}
