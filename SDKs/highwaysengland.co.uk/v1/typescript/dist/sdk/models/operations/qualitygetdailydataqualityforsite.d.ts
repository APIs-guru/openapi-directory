import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class QualityGetDailyDataQualityForSitePathParams extends SpeakeasyBase {
    version: string;
}
export declare class QualityGetDailyDataQualityForSiteQueryParams extends SpeakeasyBase {
    endDate: string;
    siteId: string;
    startDate: string;
}
export declare class QualityGetDailyDataQualityForSiteRequest extends SpeakeasyBase {
    pathParams: QualityGetDailyDataQualityForSitePathParams;
    queryParams: QualityGetDailyDataQualityForSiteQueryParams;
}
export declare class QualityGetDailyDataQualityForSiteResponse extends SpeakeasyBase {
    contentType: string;
    dailyQualityResponse?: shared.DailyQualityResponse;
    statusCode: number;
}
