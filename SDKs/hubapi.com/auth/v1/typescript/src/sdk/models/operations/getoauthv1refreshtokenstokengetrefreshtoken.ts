import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetOauthV1RefreshTokensTokenGetRefreshTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams;
}


export class GetOauthV1RefreshTokensTokenGetRefreshTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  refreshTokenInfoResponse?: shared.RefreshTokenInfoResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
