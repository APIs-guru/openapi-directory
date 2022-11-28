import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsStartPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsStartQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsMigrationJobsStartSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsStartRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsStartPathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsStartQueryParams;
    request?: Map<string, any>;
    security: DatamigrationProjectsLocationsMigrationJobsStartSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsStartResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
