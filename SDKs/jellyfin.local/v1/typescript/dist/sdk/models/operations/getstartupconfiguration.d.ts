import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStartupConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetStartupConfigurationRequest extends SpeakeasyBase {
    security: GetStartupConfigurationSecurity;
}
export declare class GetStartupConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    startupConfigurationDto?: shared.StartupConfigurationDto;
    statusCode: number;
}
