import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAuthenticationFormActionProvidersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationFormActionProvidersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationFormActionProvidersPathParams;
}


export class GetRealmAuthenticationFormActionProvidersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmAuthenticationFormActionProviders2XxApplicationJsonObjects?: Map<string, any>[];

  @Metadata()
  statusCode: number;
}
