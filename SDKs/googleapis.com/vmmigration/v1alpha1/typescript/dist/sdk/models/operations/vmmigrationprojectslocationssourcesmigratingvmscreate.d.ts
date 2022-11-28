import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    migratingVmId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsCreatePathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsCreateQueryParams;
    request?: shared.MigratingVmInput;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
