import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmAuthenticationUnregisteredRequiredActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationUnregisteredRequiredActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAuthenticationUnregisteredRequiredActionsPathParams;
}


export class GetRealmAuthenticationUnregisteredRequiredActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmAuthenticationUnregisteredRequiredActions2XxApplicationJsonObjects?: Map<string, any>[];

  @SpeakeasyMetadata()
  statusCode: number;
}
