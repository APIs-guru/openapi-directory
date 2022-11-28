import { SpeakeasyBase } from "../../../internal/utils";
import { PluginStatusEnum } from "./pluginstatusenum";
import { Version } from "./version";
/**
 * This is a serializable stub class that is used by the api to provide information about installed plugins.
**/
export declare class PluginInfo extends SpeakeasyBase {
    canUninstall?: boolean;
    configurationFileName?: string;
    description?: string;
    hasImage?: boolean;
    id?: string;
    name?: string;
    status?: PluginStatusEnum;
    version?: Version;
}
