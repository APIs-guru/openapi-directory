import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOauthV1AccessTokensTokenGetAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetOauthV1AccessTokensTokenGetAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOauthV1AccessTokensTokenGetAccessTokenPathParams;
}


export class GetOauthV1AccessTokensTokenGetAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessTokenInfoResponse?: shared.AccessTokenInfoResponse;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
