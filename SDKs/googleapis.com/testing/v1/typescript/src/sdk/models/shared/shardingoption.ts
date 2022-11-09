import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManualSharding } from "./manualsharding";
import { UniformSharding } from "./uniformsharding";


// ShardingOption
/** 
 * Options for enabling sharding.
**/
export class ShardingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=manualSharding" })
  manualSharding?: ManualSharding;

  @Metadata({ data: "json, name=uniformSharding" })
  uniformSharding?: UniformSharding;
}
