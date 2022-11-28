import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisablePluginPathParamsInput extends SpeakeasyBase {
    pluginId: string;
    version: shared.Version;
}
export declare class DisablePluginSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DisablePluginRequest extends SpeakeasyBase {
    pathParams: DisablePluginPathParamsInput;
    security: DisablePluginSecurity;
}
export declare class DisablePluginResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
