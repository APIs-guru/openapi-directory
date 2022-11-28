import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportPerformanceSkuRationalizationPlanningLevelIdPathParams extends SpeakeasyBase {
    planningLevelId: number;
}
export declare class GetReportPerformanceSkuRationalizationPlanningLevelIdHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetReportPerformanceSkuRationalizationPlanningLevelIdRequest extends SpeakeasyBase {
    pathParams: GetReportPerformanceSkuRationalizationPlanningLevelIdPathParams;
    headers: GetReportPerformanceSkuRationalizationPlanningLevelIdHeaders;
}
export declare class GetReportPerformanceSkuRationalizationPlanningLevelIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    portfolioModels?: shared.PortfolioModel[];
    statusCode: number;
}
