import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudschedulerProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudschedulerProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudschedulerProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudschedulerProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: CloudschedulerProjectsLocationsListPathParams;
    queryParams: CloudschedulerProjectsLocationsListQueryParams;
    security: CloudschedulerProjectsLocationsListSecurity;
}
export declare class CloudschedulerProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
