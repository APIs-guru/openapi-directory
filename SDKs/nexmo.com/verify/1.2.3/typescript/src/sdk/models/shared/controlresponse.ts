import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ControlResponseCommandEnum {
    Cancel = "cancel",
    TriggerNextEvent = "trigger_next_event"
}


// ControlResponse
/** 
 * Success
**/
export class ControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: ControlResponseCommandEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
