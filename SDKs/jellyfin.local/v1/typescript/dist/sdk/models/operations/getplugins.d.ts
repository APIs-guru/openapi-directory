import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPluginsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPluginsRequest extends SpeakeasyBase {
    security: GetPluginsSecurity;
}
export declare class GetPluginsResponse extends SpeakeasyBase {
    contentType: string;
    pluginInfos?: shared.PluginInfo[];
    statusCode: number;
}
