import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTracesSpansCreateSpanPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtraceProjectsTracesSpansCreateSpanQueryParams extends SpeakeasyBase {
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
export declare class CloudtraceProjectsTracesSpansCreateSpanSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTracesSpansCreateSpanSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTracesSpansCreateSpanSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTracesSpansCreateSpanSecurityOption1;
    option2?: CloudtraceProjectsTracesSpansCreateSpanSecurityOption2;
}
export declare class CloudtraceProjectsTracesSpansCreateSpanRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTracesSpansCreateSpanPathParams;
    queryParams: CloudtraceProjectsTracesSpansCreateSpanQueryParams;
    request?: shared.Span;
    security: CloudtraceProjectsTracesSpansCreateSpanSecurity;
}
export declare class CloudtraceProjectsTracesSpansCreateSpanResponse extends SpeakeasyBase {
    contentType: string;
    span?: shared.Span;
    statusCode: number;
}
