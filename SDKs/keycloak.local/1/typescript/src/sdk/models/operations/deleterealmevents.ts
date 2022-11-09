import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmEventsPathParams;
}


export class DeleteRealmEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
