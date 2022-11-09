import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class QualityGetOverallDataQualityForSitesPathParams extends SpeakeasyBase {
    version: string;
}
export declare class QualityGetOverallDataQualityForSitesQueryParams extends SpeakeasyBase {
    endDate: string;
    sites: string;
    startDate: string;
}
export declare class QualityGetOverallDataQualityForSitesRequest extends SpeakeasyBase {
    pathParams: QualityGetOverallDataQualityForSitesPathParams;
    queryParams: QualityGetOverallDataQualityForSitesQueryParams;
}
export declare class QualityGetOverallDataQualityForSitesResponse extends SpeakeasyBase {
    contentType: string;
    overallQualityResponse?: shared.OverallQualityResponse;
    statusCode: number;
}
