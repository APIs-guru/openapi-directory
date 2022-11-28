import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    instanceDeadline?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpannerProjectsInstancesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesListSecurityOption1;
    option2?: SpannerProjectsInstancesListSecurityOption2;
}
export declare class SpannerProjectsInstancesListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesListPathParams;
    queryParams: SpannerProjectsInstancesListQueryParams;
    security: SpannerProjectsInstancesListSecurity;
}
export declare class SpannerProjectsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
}
