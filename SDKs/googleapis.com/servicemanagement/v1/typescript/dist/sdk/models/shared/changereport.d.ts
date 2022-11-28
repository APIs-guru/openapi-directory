import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigChange } from "./configchange";
/**
 * Change report associated with a particular service configuration. It contains a list of ConfigChanges based on the comparison between two service configurations.
**/
export declare class ChangeReport extends SpeakeasyBase {
    configChanges?: ConfigChange[];
}
