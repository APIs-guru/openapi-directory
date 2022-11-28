import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum {
    MigratingVmViewUnspecified = "MIGRATING_VM_VIEW_UNSPECIFIED",
    MigratingVmViewBasic = "MIGRATING_VM_VIEW_BASIC",
    MigratingVmViewFull = "MIGRATING_VM_VIEW_FULL"
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams extends SpeakeasyBase {
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
    view?: VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsListResponse extends SpeakeasyBase {
    contentType: string;
    listMigratingVmsResponse?: shared.ListMigratingVmsResponse;
    statusCode: number;
}
