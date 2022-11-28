import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoConditionResult
/** 
 * Contains the combined condition calculation results.
**/
export class EnterpriseCrmEventbusProtoConditionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentTaskNumber" })
  currentTaskNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=nextTaskNumber" })
  nextTaskNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: boolean;
}
