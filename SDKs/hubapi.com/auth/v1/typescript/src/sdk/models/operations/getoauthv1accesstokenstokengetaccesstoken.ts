import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOauthV1AccessTokensTokenGetAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetOauthV1AccessTokensTokenGetAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOauthV1AccessTokensTokenGetAccessTokenPathParams;
}


export class GetOauthV1AccessTokensTokenGetAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  accessTokenInfoResponse?: shared.AccessTokenInfoResponse;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
