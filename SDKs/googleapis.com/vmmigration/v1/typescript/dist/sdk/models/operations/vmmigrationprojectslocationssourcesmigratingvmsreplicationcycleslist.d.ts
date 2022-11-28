import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListQueryParams;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse extends SpeakeasyBase {
    contentType: string;
    listReplicationCyclesResponse?: shared.ListReplicationCyclesResponse;
    statusCode: number;
}
