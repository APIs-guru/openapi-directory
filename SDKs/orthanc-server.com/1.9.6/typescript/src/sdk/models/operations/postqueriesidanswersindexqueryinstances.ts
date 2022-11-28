import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostQueriesIdAnswersIndexQueryInstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class PostQueriesIdAnswersIndexQueryInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostQueriesIdAnswersIndexQueryInstancesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostQueriesIdAnswersIndexQueryInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postQueriesIdAnswersIndexQueryInstances200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
