import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NumberDetailsUpdateMessagesCallbackTypeEnum {
    App = "app"
}
export declare enum NumberDetailsUpdateVoiceCallbackTypeEnum {
    Sip = "sip",
    Tel = "tel",
    App = "app"
}
export declare class NumberDetailsUpdate extends SpeakeasyBase {
    appId?: string;
    country: string;
    messagesCallbackType?: NumberDetailsUpdateMessagesCallbackTypeEnum;
    messagesCallbackValue?: string;
    moHttpUrl?: string;
    moSmppSysType?: string;
    msisdn: string;
    voiceCallbackType?: NumberDetailsUpdateVoiceCallbackTypeEnum;
    voiceCallbackValue?: string;
    voiceStatusCallback?: string;
}
