import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteQueriesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteQueriesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteQueriesIdPathParams;
}


export class DeleteQueriesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
