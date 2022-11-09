import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAuthenticationFormProvidersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationFormProvidersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationFormProvidersPathParams;
}


export class GetRealmAuthenticationFormProvidersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmAuthenticationFormProviders2XxApplicationJsonObjects?: Map<string, any>[];

  @Metadata()
  statusCode: number;
}
