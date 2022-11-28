import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesBackupsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SpannerProjectsInstancesBackupsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpannerProjectsInstancesBackupsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupsPatchSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesBackupsPatchSecurityOption1;
    option2?: SpannerProjectsInstancesBackupsPatchSecurityOption2;
}
export declare class SpannerProjectsInstancesBackupsPatchRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesBackupsPatchPathParams;
    queryParams: SpannerProjectsInstancesBackupsPatchQueryParams;
    request?: shared.BackupInput;
    security: SpannerProjectsInstancesBackupsPatchSecurity;
}
export declare class SpannerProjectsInstancesBackupsPatchResponse extends SpeakeasyBase {
    backup?: shared.Backup;
    contentType: string;
    statusCode: number;
}
