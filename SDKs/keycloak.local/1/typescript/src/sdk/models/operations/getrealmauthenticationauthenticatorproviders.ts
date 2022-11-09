import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAuthenticationAuthenticatorProvidersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationAuthenticatorProvidersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationAuthenticatorProvidersPathParams;
}


export class GetRealmAuthenticationAuthenticatorProvidersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmAuthenticationAuthenticatorProviders2XxApplicationJsonObjects?: Map<string, any>[];

  @Metadata()
  statusCode: number;
}
