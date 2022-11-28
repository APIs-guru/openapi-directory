import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsVariablesWatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RuntimeconfigProjectsConfigsVariablesWatchQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsVariablesWatchSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsVariablesWatchRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsVariablesWatchPathParams;
    queryParams: RuntimeconfigProjectsConfigsVariablesWatchQueryParams;
    request?: shared.WatchVariableRequest;
    security: RuntimeconfigProjectsConfigsVariablesWatchSecurity;
}
export declare class RuntimeconfigProjectsConfigsVariablesWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variable?: shared.Variable;
}
