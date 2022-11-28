import { SpeakeasyBase } from "../../../internal/utils";
import { ManualSharding } from "./manualsharding";
import { UniformSharding } from "./uniformsharding";
/**
 * Options for enabling sharding.
**/
export declare class ShardingOption extends SpeakeasyBase {
    manualSharding?: ManualSharding;
    uniformSharding?: UniformSharding;
}
