import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementGroupVersionKind } from "./configmanagementgroupversionkind";
/**
 * Model for a config file in the git repo with an associated Sync error
**/
export declare class ConfigManagementErrorResource extends SpeakeasyBase {
    resourceGvk?: ConfigManagementGroupVersionKind;
    resourceName?: string;
    resourceNamespace?: string;
    sourcePath?: string;
}
