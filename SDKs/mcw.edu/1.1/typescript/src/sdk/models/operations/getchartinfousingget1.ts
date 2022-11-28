import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChartInfoUsingGet1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=termString" })
  termString: string;
}


export class GetChartInfoUsingGet1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChartInfoUsingGet1PathParams;
}


export class GetChartInfoUsingGet1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
