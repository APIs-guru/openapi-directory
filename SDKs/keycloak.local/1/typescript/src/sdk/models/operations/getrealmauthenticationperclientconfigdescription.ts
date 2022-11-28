import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmAuthenticationPerClientConfigDescriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationPerClientConfigDescriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAuthenticationPerClientConfigDescriptionPathParams;
}


export class GetRealmAuthenticationPerClientConfigDescriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmAuthenticationPerClientConfigDescription2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
