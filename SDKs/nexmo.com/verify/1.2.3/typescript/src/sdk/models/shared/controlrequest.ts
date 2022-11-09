import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ControlRequestCmdEnum {
    Cancel = "cancel"
,    TriggerNextEvent = "trigger_next_event"
}


export class ControlRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=api_secret;" })
  apiSecret: string;

  @Metadata({ data: "form, name=cmd;" })
  cmd: ControlRequestCmdEnum;

  @Metadata({ data: "form, name=request_id;" })
  requestId: string;
}
