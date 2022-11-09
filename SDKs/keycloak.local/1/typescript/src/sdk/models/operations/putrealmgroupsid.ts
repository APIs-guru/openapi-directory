import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmGroupsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GroupRepresentation;
}


export class PutRealmGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
