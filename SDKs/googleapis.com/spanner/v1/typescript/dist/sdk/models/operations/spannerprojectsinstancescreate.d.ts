import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesCreateQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesCreateSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesCreateSecurityOption1;
    option2?: SpannerProjectsInstancesCreateSecurityOption2;
}
export declare class SpannerProjectsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesCreatePathParams;
    queryParams: SpannerProjectsInstancesCreateQueryParams;
    request?: shared.CreateInstanceRequestInput;
    security: SpannerProjectsInstancesCreateSecurity;
}
export declare class SpannerProjectsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
