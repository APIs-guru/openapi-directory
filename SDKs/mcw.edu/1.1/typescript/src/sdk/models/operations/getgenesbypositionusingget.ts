import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGenesByPositionUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chr" })
  chr: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=start" })
  start: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop" })
  stop: number;
}


export class GetGenesByPositionUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenesByPositionUsingGetPathParams;
}


export class GetGenesByPositionUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
