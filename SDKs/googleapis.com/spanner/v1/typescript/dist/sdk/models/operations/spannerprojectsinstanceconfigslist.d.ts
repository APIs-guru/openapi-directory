import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstanceConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstanceConfigsListQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstanceConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstanceConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstanceConfigsListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstanceConfigsListSecurityOption1;
    option2?: SpannerProjectsInstanceConfigsListSecurityOption2;
}
export declare class SpannerProjectsInstanceConfigsListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstanceConfigsListPathParams;
    queryParams: SpannerProjectsInstanceConfigsListQueryParams;
    security: SpannerProjectsInstanceConfigsListSecurity;
}
export declare class SpannerProjectsInstanceConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listInstanceConfigsResponse?: shared.ListInstanceConfigsResponse;
    statusCode: number;
}
