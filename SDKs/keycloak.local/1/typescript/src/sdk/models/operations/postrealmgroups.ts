import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmGroupsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GroupRepresentation;
}


export class PostRealmGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
