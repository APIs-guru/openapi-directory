import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsCommitPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCommitQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCommitSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCommitRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsCommitPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsCommitQueryParams;
    request?: shared.CommitRequest;
    security: SpannerProjectsInstancesDatabasesSessionsCommitSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsCommitResponse extends SpeakeasyBase {
    commitResponse?: shared.CommitResponse;
    contentType: string;
    statusCode: number;
}
