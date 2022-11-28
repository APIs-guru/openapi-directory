import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ControlRequestCmdEnum {
    Cancel = "cancel",
    TriggerNextEvent = "trigger_next_event"
}


export class ControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=api_secret;" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "form, name=cmd;" })
  cmd: ControlRequestCmdEnum;

  @SpeakeasyMetadata({ data: "form, name=request_id;" })
  requestId: string;
}
