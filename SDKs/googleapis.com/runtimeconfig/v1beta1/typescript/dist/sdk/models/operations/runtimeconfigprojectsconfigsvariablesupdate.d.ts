import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsVariablesUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RuntimeconfigProjectsConfigsVariablesUpdateQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsVariablesUpdateSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsVariablesUpdateRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsVariablesUpdatePathParams;
    queryParams: RuntimeconfigProjectsConfigsVariablesUpdateQueryParams;
    request?: shared.Variable;
    security: RuntimeconfigProjectsConfigsVariablesUpdateSecurity;
}
export declare class RuntimeconfigProjectsConfigsVariablesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variable?: shared.Variable;
}
