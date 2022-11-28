import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsOperationsListPathParams;
    queryParams: DatamigrationProjectsLocationsOperationsListQueryParams;
    security: DatamigrationProjectsLocationsOperationsListSecurity;
}
export declare class DatamigrationProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
