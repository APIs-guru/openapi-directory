import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum {
    UnknownType = "UNKNOWN_TYPE",
    TaskConfig = "TASK_CONFIG",
    TriggerConfig = "TRIGGER_CONFIG"
}
/**
 * Represents a node identifier (type + id). Next highest id: 3
**/
export declare class EnterpriseCrmEventbusProtoNodeIdentifier extends SpeakeasyBase {
    elementIdentifier?: string;
    elementType?: EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum;
}
