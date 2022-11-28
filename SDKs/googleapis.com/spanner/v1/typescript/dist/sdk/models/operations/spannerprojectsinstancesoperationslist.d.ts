import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SpannerProjectsInstancesOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpannerProjectsInstancesOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesOperationsListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesOperationsListSecurityOption1;
    option2?: SpannerProjectsInstancesOperationsListSecurityOption2;
}
export declare class SpannerProjectsInstancesOperationsListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesOperationsListPathParams;
    queryParams: SpannerProjectsInstancesOperationsListQueryParams;
    security: SpannerProjectsInstancesOperationsListSecurity;
}
export declare class SpannerProjectsInstancesOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
