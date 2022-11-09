import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmComponentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmComponentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmComponentsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ComponentRepresentation;
}


export class PutRealmComponentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
