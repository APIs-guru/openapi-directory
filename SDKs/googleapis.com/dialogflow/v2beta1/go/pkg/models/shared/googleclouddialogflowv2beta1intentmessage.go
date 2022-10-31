package shared




type GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum string

const (
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumPlatformUnspecified GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "PLATFORM_UNSPECIFIED"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumFacebook GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "FACEBOOK"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumSlack GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "SLACK"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumTelegram GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "TELEGRAM"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumKik GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "KIK"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumSkype GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "SKYPE"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumLine GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "LINE"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumViber GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "VIBER"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumActionsOnGoogle GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "ACTIONS_ON_GOOGLE"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumTelephony GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "TELEPHONY"
GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumGoogleHangouts GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "GOOGLE_HANGOUTS"
)


type GoogleCloudDialogflowV2beta1IntentMessage struct {
    BasicCard *GoogleCloudDialogflowV2beta1IntentMessageBasicCard `json:"basicCard,omitempty"`
    BrowseCarouselCard *GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard `json:"browseCarouselCard,omitempty"`
    Card *GoogleCloudDialogflowV2beta1IntentMessageCard `json:"card,omitempty"`
    CarouselSelect *GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect `json:"carouselSelect,omitempty"`
    Image *GoogleCloudDialogflowV2beta1IntentMessageImage `json:"image,omitempty"`
    LinkOutSuggestion *GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion `json:"linkOutSuggestion,omitempty"`
    ListSelect *GoogleCloudDialogflowV2beta1IntentMessageListSelect `json:"listSelect,omitempty"`
    MediaContent *GoogleCloudDialogflowV2beta1IntentMessageMediaContent `json:"mediaContent,omitempty"`
    Payload map[string]interface{} `json:"payload,omitempty"`
    Platform *GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum `json:"platform,omitempty"`
    QuickReplies *GoogleCloudDialogflowV2beta1IntentMessageQuickReplies `json:"quickReplies,omitempty"`
    RbmCarouselRichCard *GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard `json:"rbmCarouselRichCard,omitempty"`
    RbmStandaloneRichCard *GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard `json:"rbmStandaloneRichCard,omitempty"`
    RbmText *GoogleCloudDialogflowV2beta1IntentMessageRbmText `json:"rbmText,omitempty"`
    SimpleResponses *GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses `json:"simpleResponses,omitempty"`
    Suggestions *GoogleCloudDialogflowV2beta1IntentMessageSuggestions `json:"suggestions,omitempty"`
    TableCard *GoogleCloudDialogflowV2beta1IntentMessageTableCard `json:"tableCard,omitempty"`
    TelephonyPlayAudio *GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio `json:"telephonyPlayAudio,omitempty"`
    TelephonySynthesizeSpeech *GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech `json:"telephonySynthesizeSpeech,omitempty"`
    TelephonyTransferCall *GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall `json:"telephonyTransferCall,omitempty"`
    Text *GoogleCloudDialogflowV2beta1IntentMessageText `json:"text,omitempty"`
    
}

