import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    migrationJobId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsCreateRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsCreatePathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsCreateQueryParams;
    request?: shared.MigrationJobInput;
    security: DatamigrationProjectsLocationsMigrationJobsCreateSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
