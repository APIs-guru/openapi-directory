import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoCombinedCondition } from "./enterprisecrmeventbusprotocombinedcondition";
/**
 * The task that is next in line to be executed, if the condition specified evaluated to true.
**/
export declare class EnterpriseCrmEventbusProtoNextTask extends SpeakeasyBase {
    combinedConditions?: EnterpriseCrmEventbusProtoCombinedCondition[];
    condition?: string;
    description?: string;
    label?: string;
    taskConfigId?: string;
    taskNumber?: string;
}
