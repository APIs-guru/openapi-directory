import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoCombinedCondition } from "./enterprisecrmeventbusprotocombinedcondition";



// EnterpriseCrmEventbusProtoNextTask
/** 
 * The task that is next in line to be executed, if the condition specified evaluated to true.
**/
export class EnterpriseCrmEventbusProtoNextTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combinedConditions", elemType: EnterpriseCrmEventbusProtoCombinedCondition })
  combinedConditions?: EnterpriseCrmEventbusProtoCombinedCondition[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=taskConfigId" })
  taskConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
