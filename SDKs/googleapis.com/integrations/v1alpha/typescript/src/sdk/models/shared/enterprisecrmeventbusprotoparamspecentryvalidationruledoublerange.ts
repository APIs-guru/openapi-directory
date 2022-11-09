import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange
/** 
 * Range used to validate doubles and floats.
**/
export class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;
}
