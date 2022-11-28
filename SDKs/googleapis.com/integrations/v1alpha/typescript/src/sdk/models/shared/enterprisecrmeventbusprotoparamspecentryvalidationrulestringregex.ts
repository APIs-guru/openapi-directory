import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex
/** 
 * Rule used to validate strings.
**/
export class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusive" })
  exclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;
}
