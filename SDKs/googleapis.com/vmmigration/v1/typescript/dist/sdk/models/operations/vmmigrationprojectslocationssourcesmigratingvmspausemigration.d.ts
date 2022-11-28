import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams extends SpeakeasyBase {
    migratingVm: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams;
    request?: Map<string, any>;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
