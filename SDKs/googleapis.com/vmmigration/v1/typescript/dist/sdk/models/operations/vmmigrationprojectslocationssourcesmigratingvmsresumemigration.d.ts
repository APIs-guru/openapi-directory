import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationPathParams extends SpeakeasyBase {
    migratingVm: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationQueryParams;
    request?: Map<string, any>;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
