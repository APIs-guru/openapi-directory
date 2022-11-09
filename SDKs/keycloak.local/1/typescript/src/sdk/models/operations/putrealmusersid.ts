import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmUsersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmUsersIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserRepresentation;
}


export class PutRealmUsersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
