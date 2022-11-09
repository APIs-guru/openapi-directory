import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdStatisticsPathParams;
}


export class GetInstancesIdStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdStatistics200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
