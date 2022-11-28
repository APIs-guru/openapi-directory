import { SpeakeasyBase } from "../../../internal/utils";
import { Advice } from "./advice";
export declare enum ConfigChangeChangeTypeEnum {
    ChangeTypeUnspecified = "CHANGE_TYPE_UNSPECIFIED",
    Added = "ADDED",
    Removed = "REMOVED",
    Modified = "MODIFIED"
}
/**
 * Output generated from semantically comparing two versions of a service configuration. Includes detailed information about a field that have changed with applicable advice about potential consequences for the change, such as backwards-incompatibility.
**/
export declare class ConfigChange extends SpeakeasyBase {
    advices?: Advice[];
    changeType?: ConfigChangeChangeTypeEnum;
    element?: string;
    newValue?: string;
    oldValue?: string;
}
