import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmEventsConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmEventsConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmEventsConfigPathParams;
}


export class GetRealmEventsConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  realmEventsConfigRepresentation?: shared.RealmEventsConfigRepresentation;

  @SpeakeasyMetadata()
  statusCode: number;
}
