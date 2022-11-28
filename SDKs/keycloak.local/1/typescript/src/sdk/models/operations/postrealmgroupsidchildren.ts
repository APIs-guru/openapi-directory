import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmGroupsIdChildrenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmGroupsIdChildrenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmGroupsIdChildrenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GroupRepresentation;
}


export class PostRealmGroupsIdChildrenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
