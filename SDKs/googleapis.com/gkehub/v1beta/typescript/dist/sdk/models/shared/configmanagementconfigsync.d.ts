import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementGitConfig } from "./configmanagementgitconfig";
import { ConfigManagementOciConfig } from "./configmanagementociconfig";
/**
 * Configuration for Config Sync
**/
export declare class ConfigManagementConfigSync extends SpeakeasyBase {
    allowVerticalScale?: boolean;
    enabled?: boolean;
    git?: ConfigManagementGitConfig;
    oci?: ConfigManagementOciConfig;
    preventDrift?: boolean;
    sourceFormat?: string;
}
