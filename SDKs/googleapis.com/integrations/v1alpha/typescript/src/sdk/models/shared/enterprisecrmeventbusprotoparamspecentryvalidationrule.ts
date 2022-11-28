import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange } from "./enterprisecrmeventbusprotoparamspecentryvalidationruledoublerange";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange } from "./enterprisecrmeventbusprotoparamspecentryvalidationruleintrange";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex } from "./enterprisecrmeventbusprotoparamspecentryvalidationrulestringregex";



export class EnterpriseCrmEventbusProtoParamSpecEntryValidationRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleRange" })
  doubleRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange;

  @SpeakeasyMetadata({ data: "json, name=intRange" })
  intRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange;

  @SpeakeasyMetadata({ data: "json, name=stringRegex" })
  stringRegex?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex;
}
