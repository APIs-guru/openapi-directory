import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex
/** 
 * Rule used to validate strings.
**/
export class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusive" })
  exclusive?: boolean;

  @Metadata({ data: "json, name=regex" })
  regex?: string;
}
