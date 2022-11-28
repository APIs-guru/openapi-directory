import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlProjectsInstancesVerifyExternalSyncSettingsPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams extends SpeakeasyBase {
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
export declare class SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlProjectsInstancesVerifyExternalSyncSettingsSecurity extends SpeakeasyBase {
    option1?: SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1;
    option2?: SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2;
}
export declare class SqlProjectsInstancesVerifyExternalSyncSettingsRequest extends SpeakeasyBase {
    pathParams: SqlProjectsInstancesVerifyExternalSyncSettingsPathParams;
    queryParams: SqlProjectsInstancesVerifyExternalSyncSettingsQueryParams;
    request?: shared.SqlInstancesVerifyExternalSyncSettingsRequest;
    security: SqlProjectsInstancesVerifyExternalSyncSettingsSecurity;
}
export declare class SqlProjectsInstancesVerifyExternalSyncSettingsResponse extends SpeakeasyBase {
    contentType: string;
    sqlInstancesVerifyExternalSyncSettingsResponse?: shared.SqlInstancesVerifyExternalSyncSettingsResponse;
    statusCode: number;
}
