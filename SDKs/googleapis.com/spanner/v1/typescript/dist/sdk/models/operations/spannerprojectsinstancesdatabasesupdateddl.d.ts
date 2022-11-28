import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesUpdateDdlPathParams extends SpeakeasyBase {
    database: string;
}
export declare class SpannerProjectsInstancesDatabasesUpdateDdlQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesUpdateDdlSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesUpdateDdlRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesUpdateDdlPathParams;
    queryParams: SpannerProjectsInstancesDatabasesUpdateDdlQueryParams;
    request?: shared.UpdateDatabaseDdlRequest;
    security: SpannerProjectsInstancesDatabasesUpdateDdlSecurity;
}
export declare class SpannerProjectsInstancesDatabasesUpdateDdlResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
