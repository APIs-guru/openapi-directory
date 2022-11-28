import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPluginConfigurationPathParams extends SpeakeasyBase {
    pluginId: string;
}
export declare class GetPluginConfigurationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPluginConfigurationRequest extends SpeakeasyBase {
    pathParams: GetPluginConfigurationPathParams;
    security: GetPluginConfigurationSecurity;
}
export declare class GetPluginConfigurationResponse extends SpeakeasyBase {
    basePluginConfiguration?: Map<string, any>;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
