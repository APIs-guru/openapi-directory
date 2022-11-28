import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubereportingJobsDeletePathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class YoutubereportingJobsDeleteQueryParams extends SpeakeasyBase {
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
export declare class YoutubereportingJobsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubereportingJobsDeleteSecurityOption1;
    option2?: YoutubereportingJobsDeleteSecurityOption2;
}
export declare class YoutubereportingJobsDeleteRequest extends SpeakeasyBase {
    pathParams: YoutubereportingJobsDeletePathParams;
    queryParams: YoutubereportingJobsDeleteQueryParams;
    security: YoutubereportingJobsDeleteSecurity;
}
export declare class YoutubereportingJobsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
