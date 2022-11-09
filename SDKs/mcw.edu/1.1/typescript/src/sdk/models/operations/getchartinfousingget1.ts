import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChartInfoUsingGet1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=termString" })
  termString: string;
}


export class GetChartInfoUsingGet1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartInfoUsingGet1PathParams;
}


export class GetChartInfoUsingGet1Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
