import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams;
    queryParams: SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams;
    security: SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesListResponse extends SpeakeasyBase {
    contentType: string;
    listDatabaseRolesResponse?: shared.ListDatabaseRolesResponse;
    statusCode: number;
}
