import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlProjectsInstancesStartExternalSyncPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlProjectsInstancesStartExternalSyncQueryParams extends SpeakeasyBase {
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
export declare class SqlProjectsInstancesStartExternalSyncSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlProjectsInstancesStartExternalSyncSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlProjectsInstancesStartExternalSyncSecurity extends SpeakeasyBase {
    option1?: SqlProjectsInstancesStartExternalSyncSecurityOption1;
    option2?: SqlProjectsInstancesStartExternalSyncSecurityOption2;
}
export declare class SqlProjectsInstancesStartExternalSyncRequest extends SpeakeasyBase {
    pathParams: SqlProjectsInstancesStartExternalSyncPathParams;
    queryParams: SqlProjectsInstancesStartExternalSyncQueryParams;
    request?: shared.SqlInstancesStartExternalSyncRequest;
    security: SqlProjectsInstancesStartExternalSyncSecurity;
}
export declare class SqlProjectsInstancesStartExternalSyncResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
