import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesRestorePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesDatabasesRestoreQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesRestoreSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesRestoreSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesRestoreSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesRestoreSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesRestoreSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesRestoreRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesRestorePathParams;
    queryParams: SpannerProjectsInstancesDatabasesRestoreQueryParams;
    request?: shared.RestoreDatabaseRequest;
    security: SpannerProjectsInstancesDatabasesRestoreSecurity;
}
export declare class SpannerProjectsInstancesDatabasesRestoreResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
