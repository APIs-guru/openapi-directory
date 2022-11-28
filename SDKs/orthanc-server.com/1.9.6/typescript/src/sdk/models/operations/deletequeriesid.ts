import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteQueriesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteQueriesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteQueriesIdPathParams;
}


export class DeleteQueriesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
