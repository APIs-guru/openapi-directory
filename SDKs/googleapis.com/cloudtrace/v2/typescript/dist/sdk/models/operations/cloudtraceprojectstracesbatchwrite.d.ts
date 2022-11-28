import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTracesBatchWritePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtraceProjectsTracesBatchWriteQueryParams extends SpeakeasyBase {
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
export declare class CloudtraceProjectsTracesBatchWriteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTracesBatchWriteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTracesBatchWriteSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTracesBatchWriteSecurityOption1;
    option2?: CloudtraceProjectsTracesBatchWriteSecurityOption2;
}
export declare class CloudtraceProjectsTracesBatchWriteRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTracesBatchWritePathParams;
    queryParams: CloudtraceProjectsTracesBatchWriteQueryParams;
    request?: shared.BatchWriteSpansRequest;
    security: CloudtraceProjectsTracesBatchWriteSecurity;
}
export declare class CloudtraceProjectsTracesBatchWriteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
