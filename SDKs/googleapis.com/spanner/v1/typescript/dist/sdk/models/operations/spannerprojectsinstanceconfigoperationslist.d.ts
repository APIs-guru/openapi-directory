import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstanceConfigOperationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstanceConfigOperationsListQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstanceConfigOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstanceConfigOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstanceConfigOperationsListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstanceConfigOperationsListSecurityOption1;
    option2?: SpannerProjectsInstanceConfigOperationsListSecurityOption2;
}
export declare class SpannerProjectsInstanceConfigOperationsListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstanceConfigOperationsListPathParams;
    queryParams: SpannerProjectsInstanceConfigOperationsListQueryParams;
    security: SpannerProjectsInstanceConfigOperationsListSecurity;
}
export declare class SpannerProjectsInstanceConfigOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listInstanceConfigOperationsResponse?: shared.ListInstanceConfigOperationsResponse;
    statusCode: number;
}
