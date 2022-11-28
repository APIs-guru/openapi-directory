import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportPerformancePlanningLevelIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=planningLevelId" })
  planningLevelId: string;
}


export class GetReportPerformancePlanningLevelIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportPerformancePlanningLevelIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportPerformancePlanningLevelIdPathParams;

  @SpeakeasyMetadata()
  headers: GetReportPerformancePlanningLevelIdHeaders;
}


export class GetReportPerformancePlanningLevelIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
