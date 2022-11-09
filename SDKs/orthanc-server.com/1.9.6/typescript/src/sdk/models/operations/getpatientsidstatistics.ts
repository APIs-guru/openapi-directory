import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdStatisticsPathParams;
}


export class GetPatientsIdStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdStatistics200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
