import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams extends SpeakeasyBase {
    group: string;
}
export declare class VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams;
    queryParams: VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams;
    request?: shared.AddGroupMigrationRequest;
    security: VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity;
}
export declare class VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
