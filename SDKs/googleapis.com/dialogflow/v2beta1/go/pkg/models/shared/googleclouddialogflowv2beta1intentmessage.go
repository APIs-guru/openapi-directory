package shared

type GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumPlatformUnspecified GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "PLATFORM_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumFacebook            GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "FACEBOOK"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumSlack               GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "SLACK"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumTelegram            GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "TELEGRAM"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumKik                 GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "KIK"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumSkype               GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "SKYPE"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumLine                GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "LINE"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumViber               GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "VIBER"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumActionsOnGoogle     GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "ACTIONS_ON_GOOGLE"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumTelephony           GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "TELEPHONY"
	GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumGoogleHangouts      GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = "GOOGLE_HANGOUTS"
)

type GoogleCloudDialogflowV2beta1IntentMessage struct {
	BasicCard                 *GoogleCloudDialogflowV2beta1IntentMessageBasicCard                 `json:"basicCard"`
	BrowseCarouselCard        *GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard        `json:"browseCarouselCard"`
	Card                      *GoogleCloudDialogflowV2beta1IntentMessageCard                      `json:"card"`
	CarouselSelect            *GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect            `json:"carouselSelect"`
	Image                     *GoogleCloudDialogflowV2beta1IntentMessageImage                     `json:"image"`
	LinkOutSuggestion         *GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion         `json:"linkOutSuggestion"`
	ListSelect                *GoogleCloudDialogflowV2beta1IntentMessageListSelect                `json:"listSelect"`
	MediaContent              *GoogleCloudDialogflowV2beta1IntentMessageMediaContent              `json:"mediaContent"`
	Payload                   map[string]interface{}                                              `json:"payload"`
	Platform                  *GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum              `json:"platform"`
	QuickReplies              *GoogleCloudDialogflowV2beta1IntentMessageQuickReplies              `json:"quickReplies"`
	RbmCarouselRichCard       *GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard           `json:"rbmCarouselRichCard"`
	RbmStandaloneRichCard     *GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard         `json:"rbmStandaloneRichCard"`
	RbmText                   *GoogleCloudDialogflowV2beta1IntentMessageRbmText                   `json:"rbmText"`
	SimpleResponses           *GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses           `json:"simpleResponses"`
	Suggestions               *GoogleCloudDialogflowV2beta1IntentMessageSuggestions               `json:"suggestions"`
	TableCard                 *GoogleCloudDialogflowV2beta1IntentMessageTableCard                 `json:"tableCard"`
	TelephonyPlayAudio        *GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio        `json:"telephonyPlayAudio"`
	TelephonySynthesizeSpeech *GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech `json:"telephonySynthesizeSpeech"`
	TelephonyTransferCall     *GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall     `json:"telephonyTransferCall"`
	Text                      *GoogleCloudDialogflowV2beta1IntentMessageText                      `json:"text"`
}
