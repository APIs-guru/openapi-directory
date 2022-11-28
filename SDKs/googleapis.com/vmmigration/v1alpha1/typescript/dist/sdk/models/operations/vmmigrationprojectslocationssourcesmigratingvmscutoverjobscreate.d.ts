import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    cutoverJobId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreatePathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateQueryParams;
    request?: shared.CutoverJobInput;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
