import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsLocationsInstancesInventoriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum OsconfigProjectsLocationsInstancesInventoriesListViewEnum {
    InventoryViewUnspecified = "INVENTORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class OsconfigProjectsLocationsInstancesInventoriesListQueryParams extends SpeakeasyBase {
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
    view?: OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
}
export declare class OsconfigProjectsLocationsInstancesInventoriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsLocationsInstancesInventoriesListRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsLocationsInstancesInventoriesListPathParams;
    queryParams: OsconfigProjectsLocationsInstancesInventoriesListQueryParams;
    security: OsconfigProjectsLocationsInstancesInventoriesListSecurity;
}
export declare class OsconfigProjectsLocationsInstancesInventoriesListResponse extends SpeakeasyBase {
    contentType: string;
    listInventoriesResponse?: shared.ListInventoriesResponse;
    statusCode: number;
}
