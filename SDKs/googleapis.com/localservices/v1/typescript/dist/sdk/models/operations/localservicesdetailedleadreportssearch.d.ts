import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocalservicesDetailedLeadReportsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endDateDay?: number;
    endDateMonth?: number;
    endDateYear?: number;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    startDateDay?: number;
    startDateMonth?: number;
    startDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LocalservicesDetailedLeadReportsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LocalservicesDetailedLeadReportsSearchRequest extends SpeakeasyBase {
    queryParams: LocalservicesDetailedLeadReportsSearchQueryParams;
    security: LocalservicesDetailedLeadReportsSearchSecurity;
}
export declare class LocalservicesDetailedLeadReportsSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse?: shared.GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse;
    statusCode: number;
}
