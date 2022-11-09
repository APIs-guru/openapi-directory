import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams extends SpeakeasyBase {
    token: string;
}
export declare class GetOauthV1RefreshTokensTokenGetRefreshTokenRequest extends SpeakeasyBase {
    pathParams: GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams;
}
export declare class GetOauthV1RefreshTokensTokenGetRefreshTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    refreshTokenInfoResponse?: shared.RefreshTokenInfoResponse;
    statusCode: number;
}
