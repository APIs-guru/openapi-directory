import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesRevisionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsServicesRevisionsListQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsServicesRevisionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesRevisionsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesRevisionsListPathParams;
    queryParams: RunProjectsLocationsServicesRevisionsListQueryParams;
    security: RunProjectsLocationsServicesRevisionsListSecurity;
}
export declare class RunProjectsLocationsServicesRevisionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRunV2ListRevisionsResponse?: shared.GoogleCloudRunV2ListRevisionsResponse;
    statusCode: number;
}
