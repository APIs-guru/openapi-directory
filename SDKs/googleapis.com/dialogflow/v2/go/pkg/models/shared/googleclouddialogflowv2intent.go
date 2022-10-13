package shared

type GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum string

const (
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumPlatformUnspecified GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "PLATFORM_UNSPECIFIED"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumFacebook            GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "FACEBOOK"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSlack               GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "SLACK"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumTelegram            GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "TELEGRAM"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumKik                 GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "KIK"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSkype               GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "SKYPE"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumLine                GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "LINE"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumViber               GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "VIBER"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumActionsOnGoogle     GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "ACTIONS_ON_GOOGLE"
	GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumGoogleHangouts      GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "GOOGLE_HANGOUTS"
)

type GoogleCloudDialogflowV2IntentWebhookStateEnum string

const (
	GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateUnspecified           GoogleCloudDialogflowV2IntentWebhookStateEnum = "WEBHOOK_STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabled               GoogleCloudDialogflowV2IntentWebhookStateEnum = "WEBHOOK_STATE_ENABLED"
	GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabledForSlotFilling GoogleCloudDialogflowV2IntentWebhookStateEnum = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
)

type GoogleCloudDialogflowV2Intent struct {
	Action                   *string                                                     `json:"action"`
	DefaultResponsePlatforms []GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum `json:"defaultResponsePlatforms"`
	DisplayName              *string                                                     `json:"displayName"`
	EndInteraction           *bool                                                       `json:"endInteraction"`
	Events                   []string                                                    `json:"events"`
	FollowupIntentInfo       []GoogleCloudDialogflowV2IntentFollowupIntentInfo           `json:"followupIntentInfo"`
	InputContextNames        []string                                                    `json:"inputContextNames"`
	IsFallback               *bool                                                       `json:"isFallback"`
	LiveAgentHandoff         *bool                                                       `json:"liveAgentHandoff"`
	Messages                 []GoogleCloudDialogflowV2IntentMessage                      `json:"messages"`
	MlDisabled               *bool                                                       `json:"mlDisabled"`
	Name                     *string                                                     `json:"name"`
	OutputContexts           []GoogleCloudDialogflowV2Context                            `json:"outputContexts"`
	Parameters               []GoogleCloudDialogflowV2IntentParameter                    `json:"parameters"`
	ParentFollowupIntentName *string                                                     `json:"parentFollowupIntentName"`
	Priority                 *int32                                                      `json:"priority"`
	ResetContexts            *bool                                                       `json:"resetContexts"`
	RootFollowupIntentName   *string                                                     `json:"rootFollowupIntentName"`
	TrainingPhrases          []GoogleCloudDialogflowV2IntentTrainingPhrase               `json:"trainingPhrases"`
	WebhookState             *GoogleCloudDialogflowV2IntentWebhookStateEnum              `json:"webhookState"`
}
