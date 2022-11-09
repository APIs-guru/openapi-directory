import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocalservicesAccountReportsSearchQueryParams extends SpeakeasyBase {
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
export declare class LocalservicesAccountReportsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LocalservicesAccountReportsSearchRequest extends SpeakeasyBase {
    queryParams: LocalservicesAccountReportsSearchQueryParams;
    security: LocalservicesAccountReportsSearchSecurity;
}
export declare class LocalservicesAccountReportsSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse?: shared.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse;
    statusCode: number;
}
