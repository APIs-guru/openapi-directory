import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SpannerProjectsInstancesOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesOperationsCancelSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesOperationsCancelSecurityOption1;
    option2?: SpannerProjectsInstancesOperationsCancelSecurityOption2;
}
export declare class SpannerProjectsInstancesOperationsCancelRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesOperationsCancelPathParams;
    queryParams: SpannerProjectsInstancesOperationsCancelQueryParams;
    security: SpannerProjectsInstancesOperationsCancelSecurity;
}
export declare class SpannerProjectsInstancesOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
