import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RealmRepresentation;
}


export class PutRealmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
