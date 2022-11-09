import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmGroupsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GroupRepresentation;
}


export class PostRealmGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
