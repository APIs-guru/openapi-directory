import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnablePluginPathParamsInput extends SpeakeasyBase {
    pluginId: string;
    version: shared.Version;
}
export declare class EnablePluginSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class EnablePluginRequest extends SpeakeasyBase {
    pathParams: EnablePluginPathParamsInput;
    security: EnablePluginSecurity;
}
export declare class EnablePluginResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
