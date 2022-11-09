import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueriesIdLevelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdLevelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueriesIdLevelPathParams;
}


export class GetQueriesIdLevelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
