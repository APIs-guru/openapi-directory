import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesDropDatabasePathParams extends SpeakeasyBase {
    database: string;
}
export declare class SpannerProjectsInstancesDatabasesDropDatabaseQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesDropDatabaseSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesDropDatabaseRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesDropDatabasePathParams;
    queryParams: SpannerProjectsInstancesDatabasesDropDatabaseQueryParams;
    security: SpannerProjectsInstancesDatabasesDropDatabaseSecurity;
}
export declare class SpannerProjectsInstancesDatabasesDropDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
