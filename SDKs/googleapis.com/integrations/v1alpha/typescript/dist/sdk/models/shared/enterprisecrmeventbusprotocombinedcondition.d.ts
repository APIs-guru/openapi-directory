import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoCondition } from "./enterprisecrmeventbusprotocondition";
/**
 * This message recursively combines constituent conditions using logical AND.
**/
export declare class EnterpriseCrmEventbusProtoCombinedCondition extends SpeakeasyBase {
    conditions?: EnterpriseCrmEventbusProtoCondition[];
}
