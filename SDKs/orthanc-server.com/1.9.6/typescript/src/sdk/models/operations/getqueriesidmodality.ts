import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueriesIdModalityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdModalityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueriesIdModalityPathParams;
}


export class GetQueriesIdModalityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
