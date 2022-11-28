import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    cloneJobId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreatePathParams;
    queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateQueryParams;
    request?: shared.CloneJobInput;
    security: VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
