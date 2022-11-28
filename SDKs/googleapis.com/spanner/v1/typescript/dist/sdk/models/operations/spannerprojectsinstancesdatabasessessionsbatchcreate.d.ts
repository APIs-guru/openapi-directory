import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsBatchCreatePathParams extends SpeakeasyBase {
    database: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBatchCreateRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsBatchCreatePathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsBatchCreateQueryParams;
    request?: shared.BatchCreateSessionsRequestInput;
    security: SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBatchCreateResponse extends SpeakeasyBase {
    batchCreateSessionsResponse?: shared.BatchCreateSessionsResponse;
    contentType: string;
    statusCode: number;
}
