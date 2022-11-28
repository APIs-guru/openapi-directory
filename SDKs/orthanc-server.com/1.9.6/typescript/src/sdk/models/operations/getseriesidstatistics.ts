import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSeriesIdStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesIdStatisticsPathParams;
}


export class GetSeriesIdStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSeriesIdStatistics200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
