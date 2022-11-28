import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubereportingJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class YoutubereportingJobsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsCreateSecurity extends SpeakeasyBase {
    option1?: YoutubereportingJobsCreateSecurityOption1;
    option2?: YoutubereportingJobsCreateSecurityOption2;
}
export declare class YoutubereportingJobsCreateRequest extends SpeakeasyBase {
    queryParams: YoutubereportingJobsCreateQueryParams;
    request?: shared.Job;
    security: YoutubereportingJobsCreateSecurity;
}
export declare class YoutubereportingJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
