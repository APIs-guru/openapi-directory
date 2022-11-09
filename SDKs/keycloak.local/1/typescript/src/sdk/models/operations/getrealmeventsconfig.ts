import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmEventsConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmEventsConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmEventsConfigPathParams;
}


export class GetRealmEventsConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  realmEventsConfigRepresentation?: shared.RealmEventsConfigRepresentation;

  @Metadata()
  statusCode: number;
}
