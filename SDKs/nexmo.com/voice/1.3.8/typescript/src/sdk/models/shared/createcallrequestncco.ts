import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointPhoneFrom } from "./endpointphonefrom";
import { EndpointPhoneTo } from "./endpointphoneto";
import { EndpointSip } from "./endpointsip";
import { EndpointWebsocket } from "./endpointwebsocket";
import { EndpointVbcExtension } from "./endpointvbcextension";


export enum CreateCallRequestNccoEventMethodEnum {
    Post = "POST",
    Get = "GET"
}

export enum CreateCallRequestNccoMachineDetectionEnum {
    Continue = "continue",
    Hangup = "hangup"
}


export class CreateCallRequestNcco extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_method" })
  eventMethod?: CreateCallRequestNccoEventMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: EndpointPhoneFrom;

  @SpeakeasyMetadata({ data: "json, name=length_timer" })
  lengthTimer?: number;

  @SpeakeasyMetadata({ data: "json, name=machine_detection" })
  machineDetection?: CreateCallRequestNccoMachineDetectionEnum;

  @SpeakeasyMetadata({ data: "json, name=ncco" })
  ncco: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=random_from_number" })
  randomFromNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ringing_timer" })
  ringingTimer?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: any[];
}
