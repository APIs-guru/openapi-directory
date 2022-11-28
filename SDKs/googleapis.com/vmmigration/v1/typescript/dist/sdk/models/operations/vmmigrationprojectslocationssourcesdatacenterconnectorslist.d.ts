import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesDatacenterConnectorsListPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesDatacenterConnectorsListQueryParams;
    security: VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse extends SpeakeasyBase {
    contentType: string;
    listDatacenterConnectorsResponse?: shared.ListDatacenterConnectorsResponse;
    statusCode: number;
}
