import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange
/** 
 * Range used to validate longs and ints.
**/
export class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: string;

  @Metadata({ data: "json, name=min" })
  min?: string;
}
