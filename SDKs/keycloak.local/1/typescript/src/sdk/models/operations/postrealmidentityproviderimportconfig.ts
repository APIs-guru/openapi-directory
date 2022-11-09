import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmIdentityProviderImportConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmIdentityProviderImportConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmIdentityProviderImportConfigPathParams;
}


export class PostRealmIdentityProviderImportConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postRealmIdentityProviderImportConfig2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
