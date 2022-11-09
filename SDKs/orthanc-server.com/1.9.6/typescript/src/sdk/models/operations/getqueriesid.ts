import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueriesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueriesIdPathParams;
}


export class GetQueriesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueriesId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
