import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateInitialConfigurationRequests extends SpeakeasyBase {
    startupConfigurationDto?: shared.StartupConfigurationDto;
    startupConfigurationDto1?: shared.StartupConfigurationDto;
    startupConfigurationDto2?: shared.StartupConfigurationDto;
}
export declare class UpdateInitialConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateInitialConfigurationRequest extends SpeakeasyBase {
    request: UpdateInitialConfigurationRequests;
    security: UpdateInitialConfigurationSecurity;
}
export declare class UpdateInitialConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
