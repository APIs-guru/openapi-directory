import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsServicesListQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsServicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesListPathParams;
    queryParams: RunProjectsLocationsServicesListQueryParams;
    security: RunProjectsLocationsServicesListSecurity;
}
export declare class RunProjectsLocationsServicesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRunV2ListServicesResponse?: shared.GoogleCloudRunV2ListServicesResponse;
    statusCode: number;
}
