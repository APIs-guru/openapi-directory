import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetOauthV1RefreshTokensTokenGetRefreshTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams;
}


export class GetOauthV1RefreshTokensTokenGetRefreshTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  refreshTokenInfoResponse?: shared.RefreshTokenInfoResponse;

  @Metadata()
  statusCode: number;
}
