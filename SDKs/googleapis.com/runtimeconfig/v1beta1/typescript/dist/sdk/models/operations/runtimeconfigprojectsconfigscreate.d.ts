import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RuntimeconfigProjectsConfigsCreateQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsCreateSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsCreateSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsCreateSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsCreateRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsCreatePathParams;
    queryParams: RuntimeconfigProjectsConfigsCreateQueryParams;
    request?: shared.RuntimeConfig;
    security: RuntimeconfigProjectsConfigsCreateSecurity;
}
export declare class RuntimeconfigProjectsConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    runtimeConfig?: shared.RuntimeConfig;
    statusCode: number;
}
