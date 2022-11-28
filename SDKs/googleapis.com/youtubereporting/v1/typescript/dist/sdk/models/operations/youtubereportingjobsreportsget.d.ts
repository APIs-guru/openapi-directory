import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubereportingJobsReportsGetPathParams extends SpeakeasyBase {
    jobId: string;
    reportId: string;
}
export declare class YoutubereportingJobsReportsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubereportingJobsReportsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsReportsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsReportsGetSecurity extends SpeakeasyBase {
    option1?: YoutubereportingJobsReportsGetSecurityOption1;
    option2?: YoutubereportingJobsReportsGetSecurityOption2;
}
export declare class YoutubereportingJobsReportsGetRequest extends SpeakeasyBase {
    pathParams: YoutubereportingJobsReportsGetPathParams;
    queryParams: YoutubereportingJobsReportsGetQueryParams;
    security: YoutubereportingJobsReportsGetSecurity;
}
export declare class YoutubereportingJobsReportsGetResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
