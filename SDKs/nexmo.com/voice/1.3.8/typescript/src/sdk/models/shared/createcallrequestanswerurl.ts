import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointPhoneFrom } from "./endpointphonefrom";
import { EndpointPhoneTo } from "./endpointphoneto";
import { EndpointSip } from "./endpointsip";
import { EndpointWebsocket } from "./endpointwebsocket";
import { EndpointVbcExtension } from "./endpointvbcextension";

export enum CreateCallRequestAnswerUrlAnswerMethodEnum {
    Post = "POST"
,    Get = "GET"
}

export enum CreateCallRequestAnswerUrlEventMethodEnum {
    Post = "POST"
,    Get = "GET"
}

export enum CreateCallRequestAnswerUrlMachineDetectionEnum {
    Continue = "continue"
,    Hangup = "hangup"
}


export class CreateCallRequestAnswerUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer_method" })
  answerMethod?: CreateCallRequestAnswerUrlAnswerMethodEnum;

  @Metadata({ data: "json, name=answer_url" })
  answerUrl: string[];

  @Metadata({ data: "json, name=event_method" })
  eventMethod?: CreateCallRequestAnswerUrlEventMethodEnum;

  @Metadata({ data: "json, name=event_url" })
  eventUrl?: string[];

  @Metadata({ data: "json, name=from" })
  from?: EndpointPhoneFrom;

  @Metadata({ data: "json, name=length_timer" })
  lengthTimer?: number;

  @Metadata({ data: "json, name=machine_detection" })
  machineDetection?: CreateCallRequestAnswerUrlMachineDetectionEnum;

  @Metadata({ data: "json, name=random_from_number" })
  randomFromNumber?: boolean;

  @Metadata({ data: "json, name=ringing_timer" })
  ringingTimer?: number;

  @Metadata({ data: "json, name=to" })
  to: any[];
}
