import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UninstallPluginPathParams extends SpeakeasyBase {
    pluginId: string;
}
export declare class UninstallPluginSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UninstallPluginRequest extends SpeakeasyBase {
    pathParams: UninstallPluginPathParams;
    security: UninstallPluginSecurity;
}
export declare class UninstallPluginResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
