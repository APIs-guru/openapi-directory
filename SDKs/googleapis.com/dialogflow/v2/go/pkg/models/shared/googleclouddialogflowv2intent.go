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

// GoogleCloudDialogflowV2Intent
// An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
type GoogleCloudDialogflowV2Intent struct {
	Action                   *string                                                     `json:"action,omitempty"`
	DefaultResponsePlatforms []GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum `json:"defaultResponsePlatforms,omitempty"`
	DisplayName              *string                                                     `json:"displayName,omitempty"`
	EndInteraction           *bool                                                       `json:"endInteraction,omitempty"`
	Events                   []string                                                    `json:"events,omitempty"`
	FollowupIntentInfo       []GoogleCloudDialogflowV2IntentFollowupIntentInfo           `json:"followupIntentInfo,omitempty"`
	InputContextNames        []string                                                    `json:"inputContextNames,omitempty"`
	IsFallback               *bool                                                       `json:"isFallback,omitempty"`
	LiveAgentHandoff         *bool                                                       `json:"liveAgentHandoff,omitempty"`
	Messages                 []GoogleCloudDialogflowV2IntentMessage                      `json:"messages,omitempty"`
	MlDisabled               *bool                                                       `json:"mlDisabled,omitempty"`
	Name                     *string                                                     `json:"name,omitempty"`
	OutputContexts           []GoogleCloudDialogflowV2Context                            `json:"outputContexts,omitempty"`
	Parameters               []GoogleCloudDialogflowV2IntentParameter                    `json:"parameters,omitempty"`
	ParentFollowupIntentName *string                                                     `json:"parentFollowupIntentName,omitempty"`
	Priority                 *int32                                                      `json:"priority,omitempty"`
	ResetContexts            *bool                                                       `json:"resetContexts,omitempty"`
	RootFollowupIntentName   *string                                                     `json:"rootFollowupIntentName,omitempty"`
	TrainingPhrases          []GoogleCloudDialogflowV2IntentTrainingPhrase               `json:"trainingPhrases,omitempty"`
	WebhookState             *GoogleCloudDialogflowV2IntentWebhookStateEnum              `json:"webhookState,omitempty"`
}

// GoogleCloudDialogflowV2IntentInput
// An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
type GoogleCloudDialogflowV2IntentInput struct {
	Action                   *string                                                     `json:"action,omitempty"`
	DefaultResponsePlatforms []GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum `json:"defaultResponsePlatforms,omitempty"`
	DisplayName              *string                                                     `json:"displayName,omitempty"`
	EndInteraction           *bool                                                       `json:"endInteraction,omitempty"`
	Events                   []string                                                    `json:"events,omitempty"`
	InputContextNames        []string                                                    `json:"inputContextNames,omitempty"`
	IsFallback               *bool                                                       `json:"isFallback,omitempty"`
	LiveAgentHandoff         *bool                                                       `json:"liveAgentHandoff,omitempty"`
	Messages                 []GoogleCloudDialogflowV2IntentMessage                      `json:"messages,omitempty"`
	MlDisabled               *bool                                                       `json:"mlDisabled,omitempty"`
	Name                     *string                                                     `json:"name,omitempty"`
	OutputContexts           []GoogleCloudDialogflowV2Context                            `json:"outputContexts,omitempty"`
	Parameters               []GoogleCloudDialogflowV2IntentParameter                    `json:"parameters,omitempty"`
	ParentFollowupIntentName *string                                                     `json:"parentFollowupIntentName,omitempty"`
	Priority                 *int32                                                      `json:"priority,omitempty"`
	ResetContexts            *bool                                                       `json:"resetContexts,omitempty"`
	TrainingPhrases          []GoogleCloudDialogflowV2IntentTrainingPhrase               `json:"trainingPhrases,omitempty"`
	WebhookState             *GoogleCloudDialogflowV2IntentWebhookStateEnum              `json:"webhookState,omitempty"`
}
