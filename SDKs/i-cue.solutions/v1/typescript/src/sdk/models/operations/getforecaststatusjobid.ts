import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetForecastStatusJobIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: number;
}


export class GetForecastStatusJobIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetForecastStatusJobIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetForecastStatusJobIdPathParams;

  @Metadata()
  headers: GetForecastStatusJobIdHeaders;
}


export class GetForecastStatusJobIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
