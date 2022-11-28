import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueriesIdAnswersIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class GetQueriesIdAnswersIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueriesIdAnswersIndexPathParams;
}


export class GetQueriesIdAnswersIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQueriesIdAnswersIndex200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
