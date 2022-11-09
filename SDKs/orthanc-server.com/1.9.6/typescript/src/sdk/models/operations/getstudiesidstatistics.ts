import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdStatisticsPathParams;
}


export class GetStudiesIdStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdStatistics200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
