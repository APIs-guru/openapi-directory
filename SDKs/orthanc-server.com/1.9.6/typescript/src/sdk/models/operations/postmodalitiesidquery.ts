import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdQueryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdQueryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdQuery200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
