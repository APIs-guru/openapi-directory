import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams;
}


export class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
