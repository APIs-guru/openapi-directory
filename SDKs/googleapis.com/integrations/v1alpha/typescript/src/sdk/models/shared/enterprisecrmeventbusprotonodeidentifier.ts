import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum {
    UnknownType = "UNKNOWN_TYPE"
,    TaskConfig = "TASK_CONFIG"
,    TriggerConfig = "TRIGGER_CONFIG"
}


// EnterpriseCrmEventbusProtoNodeIdentifier
/** 
 * Represents a node identifier (type + id). Next highest id: 3
**/
export class EnterpriseCrmEventbusProtoNodeIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=elementIdentifier" })
  elementIdentifier?: string;

  @Metadata({ data: "json, name=elementType" })
  elementType?: EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum;
}
