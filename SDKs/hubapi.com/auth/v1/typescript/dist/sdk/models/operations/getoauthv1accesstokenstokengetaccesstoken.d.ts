import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOauthV1AccessTokensTokenGetAccessTokenPathParams extends SpeakeasyBase {
    token: string;
}
export declare class GetOauthV1AccessTokensTokenGetAccessTokenRequest extends SpeakeasyBase {
    pathParams: GetOauthV1AccessTokensTokenGetAccessTokenPathParams;
}
export declare class GetOauthV1AccessTokensTokenGetAccessTokenResponse extends SpeakeasyBase {
    accessTokenInfoResponse?: shared.AccessTokenInfoResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
