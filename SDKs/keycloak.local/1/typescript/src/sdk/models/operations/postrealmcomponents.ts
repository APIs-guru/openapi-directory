import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmComponentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmComponentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmComponentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ComponentRepresentation;
}


export class PostRealmComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
