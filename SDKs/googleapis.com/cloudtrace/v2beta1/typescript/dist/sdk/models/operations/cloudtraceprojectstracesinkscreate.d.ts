import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTraceSinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudtraceProjectsTraceSinksCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudtraceProjectsTraceSinksCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksCreateSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTraceSinksCreateSecurityOption1;
    option2?: CloudtraceProjectsTraceSinksCreateSecurityOption2;
}
export declare class CloudtraceProjectsTraceSinksCreateRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTraceSinksCreatePathParams;
    queryParams: CloudtraceProjectsTraceSinksCreateQueryParams;
    request?: shared.TraceSink;
    security: CloudtraceProjectsTraceSinksCreateSecurity;
}
export declare class CloudtraceProjectsTraceSinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    traceSink?: shared.TraceSink;
}
