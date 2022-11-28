import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesBackupsCopyPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesBackupsCopyQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesBackupsCopySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupsCopySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupsCopySecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesBackupsCopySecurityOption1;
    option2?: SpannerProjectsInstancesBackupsCopySecurityOption2;
}
export declare class SpannerProjectsInstancesBackupsCopyRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesBackupsCopyPathParams;
    queryParams: SpannerProjectsInstancesBackupsCopyQueryParams;
    request?: shared.CopyBackupRequest;
    security: SpannerProjectsInstancesBackupsCopySecurity;
}
export declare class SpannerProjectsInstancesBackupsCopyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
