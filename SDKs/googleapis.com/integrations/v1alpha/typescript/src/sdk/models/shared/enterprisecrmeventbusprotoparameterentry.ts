import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoParameterValueType } from "./enterprisecrmeventbusprotoparametervaluetype";



// EnterpriseCrmEventbusProtoParameterEntry
/** 
 * Key-value pair of EventBus parameters.
**/
export class EnterpriseCrmEventbusProtoParameterEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: EnterpriseCrmEventbusProtoParameterValueType;
}
