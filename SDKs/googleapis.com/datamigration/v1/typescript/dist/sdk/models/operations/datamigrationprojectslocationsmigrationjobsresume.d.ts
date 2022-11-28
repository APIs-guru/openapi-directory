import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsResumePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsResumeQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsMigrationJobsResumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsResumeRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsResumePathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsResumeQueryParams;
    request?: Map<string, any>;
    security: DatamigrationProjectsLocationsMigrationJobsResumeSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsResumeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
