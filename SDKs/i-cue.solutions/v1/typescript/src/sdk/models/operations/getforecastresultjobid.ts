import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetForecastResultJobIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: number;
}


export class GetForecastResultJobIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetForecastResultJobIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetForecastResultJobIdPathParams;

  @SpeakeasyMetadata()
  headers: GetForecastResultJobIdHeaders;
}


export class GetForecastResultJobIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
