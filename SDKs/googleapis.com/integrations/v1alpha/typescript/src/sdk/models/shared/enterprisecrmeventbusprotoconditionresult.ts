import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseCrmEventbusProtoConditionResult
/** 
 * Contains the combined condition calculation results.
**/
export class EnterpriseCrmEventbusProtoConditionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentTaskNumber" })
  currentTaskNumber?: string;

  @Metadata({ data: "json, name=nextTaskNumber" })
  nextTaskNumber?: string;

  @Metadata({ data: "json, name=result" })
  result?: boolean;
}
