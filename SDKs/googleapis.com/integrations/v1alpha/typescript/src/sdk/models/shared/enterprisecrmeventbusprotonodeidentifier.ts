import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum {
    UnknownType = "UNKNOWN_TYPE",
    TaskConfig = "TASK_CONFIG",
    TriggerConfig = "TRIGGER_CONFIG"
}


// EnterpriseCrmEventbusProtoNodeIdentifier
/** 
 * Represents a node identifier (type + id). Next highest id: 3
**/
export class EnterpriseCrmEventbusProtoNodeIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elementIdentifier" })
  elementIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=elementType" })
  elementType?: EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum;
}
