import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NumberDetailsUpdateMessagesCallbackTypeEnum {
    App = "app"
}

export enum NumberDetailsUpdateVoiceCallbackTypeEnum {
    Sip = "sip",
    Tel = "tel",
    App = "app"
}


export class NumberDetailsUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=app_id;" })
  appId?: string;

  @SpeakeasyMetadata({ data: "form, name=country;" })
  country: string;

  @SpeakeasyMetadata({ data: "form, name=messagesCallbackType;" })
  messagesCallbackType?: NumberDetailsUpdateMessagesCallbackTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=messagesCallbackValue;" })
  messagesCallbackValue?: string;

  @SpeakeasyMetadata({ data: "form, name=moHttpUrl;" })
  moHttpUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=moSmppSysType;" })
  moSmppSysType?: string;

  @SpeakeasyMetadata({ data: "form, name=msisdn;" })
  msisdn: string;

  @SpeakeasyMetadata({ data: "form, name=voiceCallbackType;" })
  voiceCallbackType?: NumberDetailsUpdateVoiceCallbackTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=voiceCallbackValue;" })
  voiceCallbackValue?: string;

  @SpeakeasyMetadata({ data: "form, name=voiceStatusCallback;" })
  voiceStatusCallback?: string;
}
