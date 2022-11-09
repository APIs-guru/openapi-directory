import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAuthenticationPerClientConfigDescriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationPerClientConfigDescriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationPerClientConfigDescriptionPathParams;
}


export class GetRealmAuthenticationPerClientConfigDescriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmAuthenticationPerClientConfigDescription2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
