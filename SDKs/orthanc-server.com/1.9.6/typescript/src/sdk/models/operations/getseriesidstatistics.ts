import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdStatisticsPathParams;
}


export class GetSeriesIdStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdStatistics200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
