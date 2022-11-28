import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsWaitersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RuntimeconfigProjectsConfigsWaitersCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersCreateSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsWaitersCreateRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsWaitersCreatePathParams;
    queryParams: RuntimeconfigProjectsConfigsWaitersCreateQueryParams;
    request?: shared.Waiter;
    security: RuntimeconfigProjectsConfigsWaitersCreateSecurity;
}
export declare class RuntimeconfigProjectsConfigsWaitersCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
