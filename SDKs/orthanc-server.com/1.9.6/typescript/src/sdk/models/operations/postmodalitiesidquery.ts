import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostModalitiesIdQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostModalitiesIdQueryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postModalitiesIdQuery200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
