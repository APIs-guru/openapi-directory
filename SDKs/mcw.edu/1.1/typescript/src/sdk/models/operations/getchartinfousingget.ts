import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChartInfoUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refRgdId" })
  refRgdId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=termString" })
  termString: string;
}


export class GetChartInfoUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChartInfoUsingGetPathParams;
}


export class GetChartInfoUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
