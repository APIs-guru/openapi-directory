import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointPhoneFrom } from "./endpointphonefrom";
import { EndpointPhoneTo } from "./endpointphoneto";
import { EndpointSip } from "./endpointsip";
import { EndpointWebsocket } from "./endpointwebsocket";
import { EndpointVbcExtension } from "./endpointvbcextension";

export enum CreateCallRequestNccoEventMethodEnum {
    Post = "POST"
,    Get = "GET"
}

export enum CreateCallRequestNccoMachineDetectionEnum {
    Continue = "continue"
,    Hangup = "hangup"
}


export class CreateCallRequestNcco extends SpeakeasyBase {
  @Metadata({ data: "json, name=event_method" })
  eventMethod?: CreateCallRequestNccoEventMethodEnum;

  @Metadata({ data: "json, name=event_url" })
  eventUrl?: string[];

  @Metadata({ data: "json, name=from" })
  from?: EndpointPhoneFrom;

  @Metadata({ data: "json, name=length_timer" })
  lengthTimer?: number;

  @Metadata({ data: "json, name=machine_detection" })
  machineDetection?: CreateCallRequestNccoMachineDetectionEnum;

  @Metadata({ data: "json, name=ncco" })
  ncco: Map<string, any>[];

  @Metadata({ data: "json, name=random_from_number" })
  randomFromNumber?: boolean;

  @Metadata({ data: "json, name=ringing_timer" })
  ringingTimer?: number;

  @Metadata({ data: "json, name=to" })
  to: any[];
}
