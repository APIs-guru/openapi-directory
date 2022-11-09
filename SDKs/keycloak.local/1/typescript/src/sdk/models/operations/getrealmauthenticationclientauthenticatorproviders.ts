import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAuthenticationClientAuthenticatorProvidersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationClientAuthenticatorProvidersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationClientAuthenticatorProvidersPathParams;
}


export class GetRealmAuthenticationClientAuthenticatorProvidersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmAuthenticationClientAuthenticatorProviders2XxApplicationJsonObjects?: Map<string, any>[];

  @Metadata()
  statusCode: number;
}
