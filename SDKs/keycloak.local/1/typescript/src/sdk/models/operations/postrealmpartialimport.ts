import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmPartialImportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmPartialImportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmPartialImportPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PartialImportRepresentation;
}


export class PostRealmPartialImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
