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

// GoogleCloudDialogflowV2IntentMessage
// A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
type GoogleCloudDialogflowV2IntentMessage struct {
	BasicCard          *GoogleCloudDialogflowV2IntentMessageBasicCard          `json:"basicCard,omitempty"`
	BrowseCarouselCard *GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard `json:"browseCarouselCard,omitempty"`
	Card               *GoogleCloudDialogflowV2IntentMessageCard               `json:"card,omitempty"`
	CarouselSelect     *GoogleCloudDialogflowV2IntentMessageCarouselSelect     `json:"carouselSelect,omitempty"`
	Image              *GoogleCloudDialogflowV2IntentMessageImage              `json:"image,omitempty"`
	LinkOutSuggestion  *GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion  `json:"linkOutSuggestion,omitempty"`
	ListSelect         *GoogleCloudDialogflowV2IntentMessageListSelect         `json:"listSelect,omitempty"`
	MediaContent       *GoogleCloudDialogflowV2IntentMessageMediaContent       `json:"mediaContent,omitempty"`
	Payload            map[string]interface{}                                  `json:"payload,omitempty"`
	Platform           *GoogleCloudDialogflowV2IntentMessagePlatformEnum       `json:"platform,omitempty"`
	QuickReplies       *GoogleCloudDialogflowV2IntentMessageQuickReplies       `json:"quickReplies,omitempty"`
	SimpleResponses    *GoogleCloudDialogflowV2IntentMessageSimpleResponses    `json:"simpleResponses,omitempty"`
	Suggestions        *GoogleCloudDialogflowV2IntentMessageSuggestions        `json:"suggestions,omitempty"`
	TableCard          *GoogleCloudDialogflowV2IntentMessageTableCard          `json:"tableCard,omitempty"`
	Text               *GoogleCloudDialogflowV2IntentMessageText               `json:"text,omitempty"`
}
