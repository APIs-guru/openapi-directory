import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStrainsByPositionUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chr" })
  chr: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=start" })
  start: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop" })
  stop: number;
}


export class GetStrainsByPositionUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStrainsByPositionUsingGetPathParams;
}


export class GetStrainsByPositionUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
