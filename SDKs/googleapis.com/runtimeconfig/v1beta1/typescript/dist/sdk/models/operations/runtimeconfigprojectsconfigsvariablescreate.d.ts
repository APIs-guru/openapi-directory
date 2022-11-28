import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsVariablesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RuntimeconfigProjectsConfigsVariablesCreateQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsVariablesCreateSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsVariablesCreateRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsVariablesCreatePathParams;
    queryParams: RuntimeconfigProjectsConfigsVariablesCreateQueryParams;
    request?: shared.Variable;
    security: RuntimeconfigProjectsConfigsVariablesCreateSecurity;
}
export declare class RuntimeconfigProjectsConfigsVariablesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variable?: shared.Variable;
}
