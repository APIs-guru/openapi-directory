import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubereportingJobsGetPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class YoutubereportingJobsGetQueryParams extends SpeakeasyBase {
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
export declare class YoutubereportingJobsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsGetSecurity extends SpeakeasyBase {
    option1?: YoutubereportingJobsGetSecurityOption1;
    option2?: YoutubereportingJobsGetSecurityOption2;
}
export declare class YoutubereportingJobsGetRequest extends SpeakeasyBase {
    pathParams: YoutubereportingJobsGetPathParams;
    queryParams: YoutubereportingJobsGetQueryParams;
    security: YoutubereportingJobsGetSecurity;
}
export declare class YoutubereportingJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
