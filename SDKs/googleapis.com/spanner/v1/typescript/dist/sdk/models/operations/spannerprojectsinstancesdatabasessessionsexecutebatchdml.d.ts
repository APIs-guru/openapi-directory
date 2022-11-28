import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams;
    request?: shared.ExecuteBatchDmlRequest;
    security: SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse extends SpeakeasyBase {
    contentType: string;
    executeBatchDmlResponse?: shared.ExecuteBatchDmlResponse;
    statusCode: number;
}
