import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetForecastResultJobIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: number;
}


export class GetForecastResultJobIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetForecastResultJobIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetForecastResultJobIdPathParams;

  @Metadata()
  headers: GetForecastResultJobIdHeaders;
}


export class GetForecastResultJobIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
