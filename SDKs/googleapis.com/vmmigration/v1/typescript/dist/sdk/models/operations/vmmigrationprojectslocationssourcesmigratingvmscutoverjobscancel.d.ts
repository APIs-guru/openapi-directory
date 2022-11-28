import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelPathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelQueryParams;
    request?: Map<string, any>;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
