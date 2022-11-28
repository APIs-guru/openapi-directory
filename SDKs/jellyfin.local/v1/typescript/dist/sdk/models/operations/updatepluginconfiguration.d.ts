import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePluginConfigurationPathParams extends SpeakeasyBase {
    pluginId: string;
}
export declare class UpdatePluginConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdatePluginConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdatePluginConfigurationPathParams;
    security: UpdatePluginConfigurationSecurity;
}
export declare class UpdatePluginConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
