import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsBeginTransactionPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBeginTransactionQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBeginTransactionRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsBeginTransactionPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsBeginTransactionQueryParams;
    request?: shared.BeginTransactionRequest;
    security: SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsBeginTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transaction?: shared.Transaction;
}
