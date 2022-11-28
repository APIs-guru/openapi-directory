import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubereportingJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeSystemManaged?: boolean;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubereportingJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingJobsListSecurity extends SpeakeasyBase {
    option1?: YoutubereportingJobsListSecurityOption1;
    option2?: YoutubereportingJobsListSecurityOption2;
}
export declare class YoutubereportingJobsListRequest extends SpeakeasyBase {
    queryParams: YoutubereportingJobsListQueryParams;
    security: YoutubereportingJobsListSecurity;
}
export declare class YoutubereportingJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
