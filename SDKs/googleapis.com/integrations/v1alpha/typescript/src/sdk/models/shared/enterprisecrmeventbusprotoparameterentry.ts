import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoParameterValueType } from "./enterprisecrmeventbusprotoparametervaluetype";


// EnterpriseCrmEventbusProtoParameterEntry
/** 
 * Key-value pair of EventBus parameters.
**/
export class EnterpriseCrmEventbusProtoParameterEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: EnterpriseCrmEventbusProtoParameterValueType;
}
