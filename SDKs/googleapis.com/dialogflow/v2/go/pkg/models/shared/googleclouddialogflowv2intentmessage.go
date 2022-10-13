package shared

type GoogleCloudDialogflowV2IntentMessagePlatformEnum string

const (
	GoogleCloudDialogflowV2IntentMessagePlatformEnumPlatformUnspecified GoogleCloudDialogflowV2IntentMessagePlatformEnum = "PLATFORM_UNSPECIFIED"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumFacebook            GoogleCloudDialogflowV2IntentMessagePlatformEnum = "FACEBOOK"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumSlack               GoogleCloudDialogflowV2IntentMessagePlatformEnum = "SLACK"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumTelegram            GoogleCloudDialogflowV2IntentMessagePlatformEnum = "TELEGRAM"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumKik                 GoogleCloudDialogflowV2IntentMessagePlatformEnum = "KIK"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumSkype               GoogleCloudDialogflowV2IntentMessagePlatformEnum = "SKYPE"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumLine                GoogleCloudDialogflowV2IntentMessagePlatformEnum = "LINE"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumViber               GoogleCloudDialogflowV2IntentMessagePlatformEnum = "VIBER"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumActionsOnGoogle     GoogleCloudDialogflowV2IntentMessagePlatformEnum = "ACTIONS_ON_GOOGLE"
	GoogleCloudDialogflowV2IntentMessagePlatformEnumGoogleHangouts      GoogleCloudDialogflowV2IntentMessagePlatformEnum = "GOOGLE_HANGOUTS"
)

type GoogleCloudDialogflowV2IntentMessage struct {
	BasicCard          *GoogleCloudDialogflowV2IntentMessageBasicCard          `json:"basicCard"`
	BrowseCarouselCard *GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard `json:"browseCarouselCard"`
	Card               *GoogleCloudDialogflowV2IntentMessageCard               `json:"card"`
	CarouselSelect     *GoogleCloudDialogflowV2IntentMessageCarouselSelect     `json:"carouselSelect"`
	Image              *GoogleCloudDialogflowV2IntentMessageImage              `json:"image"`
	LinkOutSuggestion  *GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion  `json:"linkOutSuggestion"`
	ListSelect         *GoogleCloudDialogflowV2IntentMessageListSelect         `json:"listSelect"`
	MediaContent       *GoogleCloudDialogflowV2IntentMessageMediaContent       `json:"mediaContent"`
	Payload            map[string]interface{}                                  `json:"payload"`
	Platform           *GoogleCloudDialogflowV2IntentMessagePlatformEnum       `json:"platform"`
	QuickReplies       *GoogleCloudDialogflowV2IntentMessageQuickReplies       `json:"quickReplies"`
	SimpleResponses    *GoogleCloudDialogflowV2IntentMessageSimpleResponses    `json:"simpleResponses"`
	Suggestions        *GoogleCloudDialogflowV2IntentMessageSuggestions        `json:"suggestions"`
	TableCard          *GoogleCloudDialogflowV2IntentMessageTableCard          `json:"tableCard"`
	Text               *GoogleCloudDialogflowV2IntentMessageText               `json:"text"`
}
