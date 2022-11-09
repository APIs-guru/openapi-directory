import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoCondition } from "./enterprisecrmeventbusprotocondition";


// EnterpriseCrmEventbusProtoCombinedCondition
/** 
 * This message recursively combines constituent conditions using logical AND.
**/
export class EnterpriseCrmEventbusProtoCombinedCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions", elemType: shared.EnterpriseCrmEventbusProtoCondition })
  conditions?: EnterpriseCrmEventbusProtoCondition[];
}
