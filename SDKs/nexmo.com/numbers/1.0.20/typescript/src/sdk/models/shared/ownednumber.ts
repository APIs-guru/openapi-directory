import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Ownednumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string[];

  @SpeakeasyMetadata({ data: "json, name=messagesCallbackType" })
  messagesCallbackType?: string;

  @SpeakeasyMetadata({ data: "json, name=messagesCallbackValue" })
  messagesCallbackValue?: string;

  @SpeakeasyMetadata({ data: "json, name=moHttpUrl" })
  moHttpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=msisdn" })
  msisdn?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=voiceCallbackType" })
  voiceCallbackType?: string;

  @SpeakeasyMetadata({ data: "json, name=voiceCallbackValue" })
  voiceCallbackValue?: string;
}
