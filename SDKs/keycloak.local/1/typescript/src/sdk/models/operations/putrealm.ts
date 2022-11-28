import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RealmRepresentation;
}


export class PutRealmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
