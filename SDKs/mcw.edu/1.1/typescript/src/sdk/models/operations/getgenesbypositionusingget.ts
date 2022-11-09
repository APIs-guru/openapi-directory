import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenesByPositionUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chr" })
  chr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=start" })
  start: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stop" })
  stop: number;
}


export class GetGenesByPositionUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenesByPositionUsingGetPathParams;
}


export class GetGenesByPositionUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
