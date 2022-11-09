import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTraceSinksDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtraceProjectsTraceSinksDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudtraceProjectsTraceSinksDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksDeleteSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTraceSinksDeleteSecurityOption1;
    option2?: CloudtraceProjectsTraceSinksDeleteSecurityOption2;
}
export declare class CloudtraceProjectsTraceSinksDeleteRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTraceSinksDeletePathParams;
    queryParams: CloudtraceProjectsTraceSinksDeleteQueryParams;
    security: CloudtraceProjectsTraceSinksDeleteSecurity;
}
export declare class CloudtraceProjectsTraceSinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
