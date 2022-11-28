import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManualSharding } from "./manualsharding";
import { UniformSharding } from "./uniformsharding";



// ShardingOption
/** 
 * Options for enabling sharding.
**/
export class ShardingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=manualSharding" })
  manualSharding?: ManualSharding;

  @SpeakeasyMetadata({ data: "json, name=uniformSharding" })
  uniformSharding?: UniformSharding;
}
