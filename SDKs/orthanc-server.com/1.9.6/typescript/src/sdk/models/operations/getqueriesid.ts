import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueriesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueriesIdPathParams;
}


export class GetQueriesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQueriesId200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
