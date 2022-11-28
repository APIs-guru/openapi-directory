import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SpannerProjectsInstancesOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class SpannerProjectsInstancesOperationsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesOperationsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesOperationsDeleteSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesOperationsDeleteSecurityOption1;
    option2?: SpannerProjectsInstancesOperationsDeleteSecurityOption2;
}
export declare class SpannerProjectsInstancesOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesOperationsDeletePathParams;
    queryParams: SpannerProjectsInstancesOperationsDeleteQueryParams;
    security: SpannerProjectsInstancesOperationsDeleteSecurity;
}
export declare class SpannerProjectsInstancesOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
