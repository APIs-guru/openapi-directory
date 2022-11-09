import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange } from "./enterprisecrmeventbusprotoparamspecentryvalidationruledoublerange";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange } from "./enterprisecrmeventbusprotoparamspecentryvalidationruleintrange";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex } from "./enterprisecrmeventbusprotoparamspecentryvalidationrulestringregex";


export class EnterpriseCrmEventbusProtoParamSpecEntryValidationRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=doubleRange" })
  doubleRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange;

  @Metadata({ data: "json, name=intRange" })
  intRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange;

  @Metadata({ data: "json, name=stringRegex" })
  stringRegex?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex;
}
