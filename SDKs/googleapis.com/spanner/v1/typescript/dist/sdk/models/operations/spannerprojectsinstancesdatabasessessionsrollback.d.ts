import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsRollbackPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsRollbackQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsRollbackSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsRollbackSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsRollbackSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsRollbackSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsRollbackSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsRollbackRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsRollbackPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsRollbackQueryParams;
    request?: shared.RollbackRequest;
    security: SpannerProjectsInstancesDatabasesSessionsRollbackSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsRollbackResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
