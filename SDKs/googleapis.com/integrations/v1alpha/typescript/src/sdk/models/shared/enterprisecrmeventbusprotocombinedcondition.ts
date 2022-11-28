import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoCondition } from "./enterprisecrmeventbusprotocondition";



// EnterpriseCrmEventbusProtoCombinedCondition
/** 
 * This message recursively combines constituent conditions using logical AND.
**/
export class EnterpriseCrmEventbusProtoCombinedCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: EnterpriseCrmEventbusProtoCondition })
  conditions?: EnterpriseCrmEventbusProtoCondition[];
}
