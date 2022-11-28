import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportPerformancePlanningLevelIdPathParams extends SpeakeasyBase {
    planningLevelId: string;
}
export declare class GetReportPerformancePlanningLevelIdHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetReportPerformancePlanningLevelIdRequest extends SpeakeasyBase {
    pathParams: GetReportPerformancePlanningLevelIdPathParams;
    headers: GetReportPerformancePlanningLevelIdHeaders;
}
export declare class GetReportPerformancePlanningLevelIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
