import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Ownednumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=features" })
  features?: string[];

  @Metadata({ data: "json, name=messagesCallbackType" })
  messagesCallbackType?: string;

  @Metadata({ data: "json, name=messagesCallbackValue" })
  messagesCallbackValue?: string;

  @Metadata({ data: "json, name=moHttpUrl" })
  moHttpUrl?: string;

  @Metadata({ data: "json, name=msisdn" })
  msisdn?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=voiceCallbackType" })
  voiceCallbackType?: string;

  @Metadata({ data: "json, name=voiceCallbackValue" })
  voiceCallbackValue?: string;
}
