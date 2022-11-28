import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange
/** 
 * Range used to validate longs and ints.
**/
export class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: string;
}
