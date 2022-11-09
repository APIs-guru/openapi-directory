import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsPatchTracesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CloudtraceProjectsPatchTracesQueryParams extends SpeakeasyBase {
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
export declare class CloudtraceProjectsPatchTracesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsPatchTracesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsPatchTracesSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsPatchTracesSecurityOption1;
    option2?: CloudtraceProjectsPatchTracesSecurityOption2;
}
export declare class CloudtraceProjectsPatchTracesRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsPatchTracesPathParams;
    queryParams: CloudtraceProjectsPatchTracesQueryParams;
    request?: shared.Traces;
    security: CloudtraceProjectsPatchTracesSecurity;
}
export declare class CloudtraceProjectsPatchTracesResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
