import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReportPerformancePlanningLevelIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=planningLevelId" })
  planningLevelId: string;
}


export class GetReportPerformancePlanningLevelIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportPerformancePlanningLevelIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportPerformancePlanningLevelIdPathParams;

  @Metadata()
  headers: GetReportPerformancePlanningLevelIdHeaders;
}


export class GetReportPerformancePlanningLevelIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
