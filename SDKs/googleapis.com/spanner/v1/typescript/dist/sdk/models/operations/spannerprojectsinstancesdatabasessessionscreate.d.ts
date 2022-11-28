import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsCreatePathParams extends SpeakeasyBase {
    database: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCreateQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCreateSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCreateRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsCreatePathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsCreateQueryParams;
    request?: shared.CreateSessionRequestInput;
    security: SpannerProjectsInstancesDatabasesSessionsCreateSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    session?: shared.Session;
    statusCode: number;
}
