import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmIdentityProviderImportConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmIdentityProviderImportConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmIdentityProviderImportConfigPathParams;
}


export class PostRealmIdentityProviderImportConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postRealmIdentityProviderImportConfig2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
