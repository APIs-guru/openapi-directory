import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams;
}


export class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
