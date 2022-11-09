import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmComponentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmComponentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmComponentsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ComponentRepresentation;
}


export class PostRealmComponentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
