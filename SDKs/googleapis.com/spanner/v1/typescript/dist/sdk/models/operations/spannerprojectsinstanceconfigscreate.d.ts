import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstanceConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstanceConfigsCreateQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstanceConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstanceConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstanceConfigsCreateSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstanceConfigsCreateSecurityOption1;
    option2?: SpannerProjectsInstanceConfigsCreateSecurityOption2;
}
export declare class SpannerProjectsInstanceConfigsCreateRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstanceConfigsCreatePathParams;
    queryParams: SpannerProjectsInstanceConfigsCreateQueryParams;
    request?: shared.CreateInstanceConfigRequestInput;
    security: SpannerProjectsInstanceConfigsCreateSecurity;
}
export declare class SpannerProjectsInstanceConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
