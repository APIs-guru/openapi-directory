import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmEventsConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmEventsConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmEventsConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RealmEventsConfigRepresentation;
}


export class PutRealmEventsConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
