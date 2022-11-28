import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubereportingJobsReportsListPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class YoutubereportingJobsReportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    createdAfter?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTimeAtOrAfter?: string;
    startTimeBefore?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubereportingJobsReportsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsReportsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsReportsListSecurity extends SpeakeasyBase {
    option1?: YoutubereportingJobsReportsListSecurityOption1;
    option2?: YoutubereportingJobsReportsListSecurityOption2;
}
export declare class YoutubereportingJobsReportsListRequest extends SpeakeasyBase {
    pathParams: YoutubereportingJobsReportsListPathParams;
    queryParams: YoutubereportingJobsReportsListQueryParams;
    security: YoutubereportingJobsReportsListSecurity;
}
export declare class YoutubereportingJobsReportsListResponse extends SpeakeasyBase {
    contentType: string;
    listReportsResponse?: shared.ListReportsResponse;
    statusCode: number;
}
