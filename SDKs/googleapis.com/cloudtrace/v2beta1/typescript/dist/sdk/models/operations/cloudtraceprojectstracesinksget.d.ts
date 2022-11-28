import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTraceSinksGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtraceProjectsTraceSinksGetQueryParams extends SpeakeasyBase {
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
export declare class CloudtraceProjectsTraceSinksGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksGetSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTraceSinksGetSecurityOption1;
    option2?: CloudtraceProjectsTraceSinksGetSecurityOption2;
}
export declare class CloudtraceProjectsTraceSinksGetRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTraceSinksGetPathParams;
    queryParams: CloudtraceProjectsTraceSinksGetQueryParams;
    security: CloudtraceProjectsTraceSinksGetSecurity;
}
export declare class CloudtraceProjectsTraceSinksGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    traceSink?: shared.TraceSink;
}
