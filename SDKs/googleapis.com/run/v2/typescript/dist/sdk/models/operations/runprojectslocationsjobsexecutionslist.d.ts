import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsJobsExecutionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsJobsExecutionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunProjectsLocationsJobsExecutionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsJobsExecutionsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsJobsExecutionsListPathParams;
    queryParams: RunProjectsLocationsJobsExecutionsListQueryParams;
    security: RunProjectsLocationsJobsExecutionsListSecurity;
}
export declare class RunProjectsLocationsJobsExecutionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRunV2ListExecutionsResponse?: shared.GoogleCloudRunV2ListExecutionsResponse;
    statusCode: number;
}
