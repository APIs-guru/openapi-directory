package shared




type NumberDetailsUpdateMessagesCallbackTypeEnum string

const (
    NumberDetailsUpdateMessagesCallbackTypeEnumApp NumberDetailsUpdateMessagesCallbackTypeEnum = "app"
)



type NumberDetailsUpdateVoiceCallbackTypeEnum string

const (
    NumberDetailsUpdateVoiceCallbackTypeEnumSip NumberDetailsUpdateVoiceCallbackTypeEnum = "sip"
NumberDetailsUpdateVoiceCallbackTypeEnumTel NumberDetailsUpdateVoiceCallbackTypeEnum = "tel"
NumberDetailsUpdateVoiceCallbackTypeEnumApp NumberDetailsUpdateVoiceCallbackTypeEnum = "app"
)


type NumberDetailsUpdate struct {
    AppID *string `form:"name=app_id"`
    Country string `form:"name=country"`
    MessagesCallbackType *NumberDetailsUpdateMessagesCallbackTypeEnum `form:"name=messagesCallbackType"`
    MessagesCallbackValue *string `form:"name=messagesCallbackValue"`
    MoHTTPURL *string `form:"name=moHttpUrl"`
    MoSmppSysType *string `form:"name=moSmppSysType"`
    Msisdn string `form:"name=msisdn"`
    VoiceCallbackType *NumberDetailsUpdateVoiceCallbackTypeEnum `form:"name=voiceCallbackType"`
    VoiceCallbackValue *string `form:"name=voiceCallbackValue"`
    VoiceStatusCallback *string `form:"name=voiceStatusCallback"`
    
}

