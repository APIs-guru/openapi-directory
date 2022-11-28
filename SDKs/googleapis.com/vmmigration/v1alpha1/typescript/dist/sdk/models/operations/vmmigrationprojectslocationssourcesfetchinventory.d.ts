import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesFetchInventoryPathParams extends SpeakeasyBase {
    source: string;
}
export declare class VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    forceRefresh?: boolean;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsSourcesFetchInventorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesFetchInventoryRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesFetchInventoryPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams;
    security: VmmigrationProjectsLocationsSourcesFetchInventorySecurity;
}
export declare class VmmigrationProjectsLocationsSourcesFetchInventoryResponse extends SpeakeasyBase {
    contentType: string;
    fetchInventoryResponse?: shared.FetchInventoryResponse;
    statusCode: number;
}
