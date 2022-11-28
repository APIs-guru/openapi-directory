import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams extends SpeakeasyBase {
    migratingVm: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams;
    request?: Map<string, any>;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
