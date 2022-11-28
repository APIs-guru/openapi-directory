import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesGetDdlPathParams extends SpeakeasyBase {
    database: string;
}
export declare class SpannerProjectsInstancesDatabasesGetDdlQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesGetDdlSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesGetDdlSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesGetDdlSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesGetDdlSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesGetDdlSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesGetDdlRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesGetDdlPathParams;
    queryParams: SpannerProjectsInstancesDatabasesGetDdlQueryParams;
    security: SpannerProjectsInstancesDatabasesGetDdlSecurity;
}
export declare class SpannerProjectsInstancesDatabasesGetDdlResponse extends SpeakeasyBase {
    contentType: string;
    getDatabaseDdlResponse?: shared.GetDatabaseDdlResponse;
    statusCode: number;
}
