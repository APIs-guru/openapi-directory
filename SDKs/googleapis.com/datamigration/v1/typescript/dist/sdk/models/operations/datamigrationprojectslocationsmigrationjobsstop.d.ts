import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsStopPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsStopQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsMigrationJobsStopSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsStopRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsStopPathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsStopQueryParams;
    request?: Map<string, any>;
    security: DatamigrationProjectsLocationsMigrationJobsStopSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsStopResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
