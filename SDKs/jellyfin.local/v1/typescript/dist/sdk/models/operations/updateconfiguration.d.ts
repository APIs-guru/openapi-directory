import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateConfigurationRequestsInput extends SpeakeasyBase {
    serverConfiguration?: shared.ServerConfigurationInput;
    serverConfiguration1?: shared.ServerConfigurationInput;
    serverConfiguration2?: shared.ServerConfigurationInput;
}
export declare class UpdateConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateConfigurationRequest extends SpeakeasyBase {
    request: UpdateConfigurationRequestsInput;
    security: UpdateConfigurationSecurity;
}
export declare class UpdateConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
