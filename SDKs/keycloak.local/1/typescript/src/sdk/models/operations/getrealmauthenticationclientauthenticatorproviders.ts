import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmAuthenticationClientAuthenticatorProvidersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationClientAuthenticatorProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAuthenticationClientAuthenticatorProvidersPathParams;
}


export class GetRealmAuthenticationClientAuthenticatorProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmAuthenticationClientAuthenticatorProviders2XxApplicationJsonObjects?: Map<string, any>[];

  @SpeakeasyMetadata()
  statusCode: number;
}
