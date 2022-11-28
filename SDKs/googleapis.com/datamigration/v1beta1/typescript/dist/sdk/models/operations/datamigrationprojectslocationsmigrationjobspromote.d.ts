import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsPromotePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsPromoteQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsMigrationJobsPromoteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsPromoteRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsPromotePathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsPromoteQueryParams;
    request?: Map<string, any>;
    security: DatamigrationProjectsLocationsMigrationJobsPromoteSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsPromoteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
