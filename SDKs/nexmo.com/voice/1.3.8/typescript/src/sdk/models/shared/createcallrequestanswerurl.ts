import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointPhoneFrom } from "./endpointphonefrom";
import { EndpointPhoneTo } from "./endpointphoneto";
import { EndpointSip } from "./endpointsip";
import { EndpointWebsocket } from "./endpointwebsocket";
import { EndpointVbcExtension } from "./endpointvbcextension";


export enum CreateCallRequestAnswerUrlAnswerMethodEnum {
    Post = "POST",
    Get = "GET"
}

export enum CreateCallRequestAnswerUrlEventMethodEnum {
    Post = "POST",
    Get = "GET"
}

export enum CreateCallRequestAnswerUrlMachineDetectionEnum {
    Continue = "continue",
    Hangup = "hangup"
}


export class CreateCallRequestAnswerUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer_method" })
  answerMethod?: CreateCallRequestAnswerUrlAnswerMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=answer_url" })
  answerUrl: string[];

  @SpeakeasyMetadata({ data: "json, name=event_method" })
  eventMethod?: CreateCallRequestAnswerUrlEventMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: EndpointPhoneFrom;

  @SpeakeasyMetadata({ data: "json, name=length_timer" })
  lengthTimer?: number;

  @SpeakeasyMetadata({ data: "json, name=machine_detection" })
  machineDetection?: CreateCallRequestAnswerUrlMachineDetectionEnum;

  @SpeakeasyMetadata({ data: "json, name=random_from_number" })
  randomFromNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ringing_timer" })
  ringingTimer?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: any[];
}
