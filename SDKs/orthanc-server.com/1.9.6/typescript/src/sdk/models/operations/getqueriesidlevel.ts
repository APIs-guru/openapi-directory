import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueriesIdLevelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueriesIdLevelPathParams;
}


export class GetQueriesIdLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
