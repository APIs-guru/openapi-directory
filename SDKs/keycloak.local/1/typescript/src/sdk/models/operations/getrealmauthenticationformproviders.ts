import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmAuthenticationFormProvidersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationFormProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAuthenticationFormProvidersPathParams;
}


export class GetRealmAuthenticationFormProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmAuthenticationFormProviders2XxApplicationJsonObjects?: Map<string, any>[];

  @SpeakeasyMetadata()
  statusCode: number;
}
