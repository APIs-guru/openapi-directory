import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    monthlyRangeEndMonthDay?: number;
    monthlyRangeEndMonthMonth?: number;
    monthlyRangeEndMonthYear?: number;
    monthlyRangeStartMonthDay?: number;
    monthlyRangeStartMonthMonth?: number;
    monthlyRangeStartMonthYear?: number;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest extends SpeakeasyBase {
    pathParams: BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams;
    queryParams: BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams;
}
export declare class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse extends SpeakeasyBase {
    contentType: string;
    listSearchKeywordImpressionsMonthlyResponse?: shared.ListSearchKeywordImpressionsMonthlyResponse;
    statusCode: number;
}
