import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMappedSslpByPositionUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chr" })
  chr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=start" })
  start: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stop" })
  stop: number;
}


export class GetMappedSslpByPositionUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMappedSslpByPositionUsingGetPathParams;
}


export class GetMappedSslpByPositionUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
