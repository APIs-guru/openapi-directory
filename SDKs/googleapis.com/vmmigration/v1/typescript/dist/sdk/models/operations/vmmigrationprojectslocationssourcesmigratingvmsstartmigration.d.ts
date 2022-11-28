import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams extends SpeakeasyBase {
    migratingVm: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams;
    request?: Map<string, any>;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
