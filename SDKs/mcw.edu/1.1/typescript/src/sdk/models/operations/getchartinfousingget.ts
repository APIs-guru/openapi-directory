import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChartInfoUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=refRgdId" })
  refRgdId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=termString" })
  termString: string;
}


export class GetChartInfoUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartInfoUsingGetPathParams;
}


export class GetChartInfoUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
