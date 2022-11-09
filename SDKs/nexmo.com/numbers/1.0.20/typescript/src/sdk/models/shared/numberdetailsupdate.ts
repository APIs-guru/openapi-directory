import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NumberDetailsUpdateMessagesCallbackTypeEnum {
    App = "app"
}

export enum NumberDetailsUpdateVoiceCallbackTypeEnum {
    Sip = "sip"
,    Tel = "tel"
,    App = "app"
}


export class NumberDetailsUpdate extends SpeakeasyBase {
  @Metadata({ data: "form, name=app_id;" })
  appId?: string;

  @Metadata({ data: "form, name=country;" })
  country: string;

  @Metadata({ data: "form, name=messagesCallbackType;" })
  messagesCallbackType?: NumberDetailsUpdateMessagesCallbackTypeEnum;

  @Metadata({ data: "form, name=messagesCallbackValue;" })
  messagesCallbackValue?: string;

  @Metadata({ data: "form, name=moHttpUrl;" })
  moHttpUrl?: string;

  @Metadata({ data: "form, name=moSmppSysType;" })
  moSmppSysType?: string;

  @Metadata({ data: "form, name=msisdn;" })
  msisdn: string;

  @Metadata({ data: "form, name=voiceCallbackType;" })
  voiceCallbackType?: NumberDetailsUpdateVoiceCallbackTypeEnum;

  @Metadata({ data: "form, name=voiceCallbackValue;" })
  voiceCallbackValue?: string;

  @Metadata({ data: "form, name=voiceStatusCallback;" })
  voiceStatusCallback?: string;
}
