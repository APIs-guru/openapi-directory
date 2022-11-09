import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ControlResponseCommandEnum {
    Cancel = "cancel"
,    TriggerNextEvent = "trigger_next_event"
}


// ControlResponse
/** 
 * Success
**/
export class ControlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: ControlResponseCommandEnum;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
