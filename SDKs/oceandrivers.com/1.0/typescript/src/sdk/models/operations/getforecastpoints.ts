import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetForecastPointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=yatchclubid" })
  yatchclubid: string;
}


export class GetForecastPointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetForecastPointsPathParams;
}


export class GetForecastPointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
