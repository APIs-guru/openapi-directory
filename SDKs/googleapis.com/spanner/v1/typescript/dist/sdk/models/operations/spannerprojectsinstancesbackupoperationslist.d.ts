import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesBackupOperationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesBackupOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpannerProjectsInstancesBackupOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupOperationsListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesBackupOperationsListSecurityOption1;
    option2?: SpannerProjectsInstancesBackupOperationsListSecurityOption2;
}
export declare class SpannerProjectsInstancesBackupOperationsListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesBackupOperationsListPathParams;
    queryParams: SpannerProjectsInstancesBackupOperationsListQueryParams;
    security: SpannerProjectsInstancesBackupOperationsListSecurity;
}
export declare class SpannerProjectsInstancesBackupOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listBackupOperationsResponse?: shared.ListBackupOperationsResponse;
    statusCode: number;
}
