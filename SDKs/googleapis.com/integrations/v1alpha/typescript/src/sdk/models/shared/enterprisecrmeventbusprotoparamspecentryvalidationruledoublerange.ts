import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange
/** 
 * Range used to validate doubles and floats.
**/
export class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}
