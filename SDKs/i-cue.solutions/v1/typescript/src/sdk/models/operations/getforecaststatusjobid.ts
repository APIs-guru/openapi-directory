import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetForecastStatusJobIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: number;
}


export class GetForecastStatusJobIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetForecastStatusJobIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetForecastStatusJobIdPathParams;

  @SpeakeasyMetadata()
  headers: GetForecastStatusJobIdHeaders;
}


export class GetForecastStatusJobIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
