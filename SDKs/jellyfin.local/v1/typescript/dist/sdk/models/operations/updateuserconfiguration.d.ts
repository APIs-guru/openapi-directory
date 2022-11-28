import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserConfigurationPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UpdateUserConfigurationRequests extends SpeakeasyBase {
    userConfiguration?: shared.UserConfiguration;
    userConfiguration1?: shared.UserConfiguration;
    userConfiguration2?: shared.UserConfiguration;
}
export declare class UpdateUserConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateUserConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdateUserConfigurationPathParams;
    request: UpdateUserConfigurationRequests;
    security: UpdateUserConfigurationSecurity;
}
export declare class UpdateUserConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
