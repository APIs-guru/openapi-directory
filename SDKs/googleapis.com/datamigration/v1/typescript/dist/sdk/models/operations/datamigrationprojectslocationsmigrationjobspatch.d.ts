import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsPatchRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsPatchPathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsPatchQueryParams;
    request?: shared.MigrationJobInput;
    security: DatamigrationProjectsLocationsMigrationJobsPatchSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
