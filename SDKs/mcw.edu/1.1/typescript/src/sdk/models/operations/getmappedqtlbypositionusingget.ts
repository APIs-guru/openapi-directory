import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMappedQtlByPositionUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chr" })
  chr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=start" })
  start: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stop" })
  stop: number;
}


export class GetMappedQtlByPositionUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMappedQtlByPositionUsingGetPathParams;
}


export class GetMappedQtlByPositionUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
