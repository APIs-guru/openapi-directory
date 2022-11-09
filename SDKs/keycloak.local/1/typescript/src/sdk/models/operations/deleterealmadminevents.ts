import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmAdminEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmAdminEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmAdminEventsPathParams;
}


export class DeleteRealmAdminEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
