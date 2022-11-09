import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTracesGetPathParams extends SpeakeasyBase {
    projectId: string;
    traceId: string;
}
export declare class CloudtraceProjectsTracesGetQueryParams extends SpeakeasyBase {
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
export declare class CloudtraceProjectsTracesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTracesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTracesGetSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTracesGetSecurityOption1;
    option2?: CloudtraceProjectsTracesGetSecurityOption2;
}
export declare class CloudtraceProjectsTracesGetRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTracesGetPathParams;
    queryParams: CloudtraceProjectsTracesGetQueryParams;
    security: CloudtraceProjectsTracesGetSecurity;
}
export declare class CloudtraceProjectsTracesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trace?: shared.Trace;
}
