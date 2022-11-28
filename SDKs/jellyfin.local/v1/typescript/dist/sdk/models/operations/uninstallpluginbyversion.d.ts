import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UninstallPluginByVersionPathParamsInput extends SpeakeasyBase {
    pluginId: string;
    version: shared.Version;
}
export declare class UninstallPluginByVersionSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UninstallPluginByVersionRequest extends SpeakeasyBase {
    pathParams: UninstallPluginByVersionPathParamsInput;
    security: UninstallPluginByVersionSecurity;
}
export declare class UninstallPluginByVersionResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
