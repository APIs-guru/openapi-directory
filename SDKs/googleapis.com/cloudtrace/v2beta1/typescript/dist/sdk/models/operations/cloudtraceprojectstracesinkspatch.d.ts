import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTraceSinksPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtraceProjectsTraceSinksPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudtraceProjectsTraceSinksPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksPatchSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTraceSinksPatchSecurityOption1;
    option2?: CloudtraceProjectsTraceSinksPatchSecurityOption2;
}
export declare class CloudtraceProjectsTraceSinksPatchRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTraceSinksPatchPathParams;
    queryParams: CloudtraceProjectsTraceSinksPatchQueryParams;
    request?: shared.TraceSinkInput;
    security: CloudtraceProjectsTraceSinksPatchSecurity;
}
export declare class CloudtraceProjectsTraceSinksPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    traceSink?: shared.TraceSink;
}
