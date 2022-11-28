import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmPartialImportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmPartialImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmPartialImportPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PartialImportRepresentation;
}


export class PostRealmPartialImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
