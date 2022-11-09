import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAuthenticationUnregisteredRequiredActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationUnregisteredRequiredActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationUnregisteredRequiredActionsPathParams;
}


export class GetRealmAuthenticationUnregisteredRequiredActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmAuthenticationUnregisteredRequiredActions2XxApplicationJsonObjects?: Map<string, any>[];

  @Metadata()
  statusCode: number;
}
