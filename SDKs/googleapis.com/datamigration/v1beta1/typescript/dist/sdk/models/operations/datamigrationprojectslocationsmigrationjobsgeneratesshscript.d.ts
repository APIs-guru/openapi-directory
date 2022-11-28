import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams extends SpeakeasyBase {
    migrationJob: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptQueryParams;
    request?: shared.GenerateSshScriptRequest;
    security: DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse extends SpeakeasyBase {
    contentType: string;
    sshScript?: shared.SshScript;
    statusCode: number;
}
