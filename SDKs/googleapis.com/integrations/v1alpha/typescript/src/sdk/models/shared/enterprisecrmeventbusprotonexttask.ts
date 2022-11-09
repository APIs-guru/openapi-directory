import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoCombinedCondition } from "./enterprisecrmeventbusprotocombinedcondition";


// EnterpriseCrmEventbusProtoNextTask
/** 
 * The task that is next in line to be executed, if the condition specified evaluated to true.
**/
export class EnterpriseCrmEventbusProtoNextTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=combinedConditions", elemType: shared.EnterpriseCrmEventbusProtoCombinedCondition })
  combinedConditions?: EnterpriseCrmEventbusProtoCombinedCondition[];

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=taskConfigId" })
  taskConfigId?: string;

  @Metadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
