import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationPageTypeEnum } from "./configurationpagetypeenum";
/**
 * The configuration page info.
**/
export declare class ConfigurationPageInfo extends SpeakeasyBase {
    configurationPageType?: ConfigurationPageTypeEnum;
    displayName?: string;
    enableInMainMenu?: boolean;
    menuIcon?: string;
    menuSection?: string;
    name?: string;
    pluginId?: string;
}
