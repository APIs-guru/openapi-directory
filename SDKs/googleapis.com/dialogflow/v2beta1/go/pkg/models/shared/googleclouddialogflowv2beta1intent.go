package shared

type GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum string

const (
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumPlatformUnspecified GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "PLATFORM_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumFacebook            GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "FACEBOOK"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumSlack               GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "SLACK"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumTelegram            GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "TELEGRAM"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumKik                 GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "KIK"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumSkype               GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "SKYPE"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumLine                GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "LINE"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumViber               GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "VIBER"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumActionsOnGoogle     GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "ACTIONS_ON_GOOGLE"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumTelephony           GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "TELEPHONY"
	GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumGoogleHangouts      GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = "GOOGLE_HANGOUTS"
)

type GoogleCloudDialogflowV2beta1IntentWebhookStateEnum string

const (
	GoogleCloudDialogflowV2beta1IntentWebhookStateEnumWebhookStateUnspecified           GoogleCloudDialogflowV2beta1IntentWebhookStateEnum = "WEBHOOK_STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentWebhookStateEnumWebhookStateEnabled               GoogleCloudDialogflowV2beta1IntentWebhookStateEnum = "WEBHOOK_STATE_ENABLED"
	GoogleCloudDialogflowV2beta1IntentWebhookStateEnumWebhookStateEnabledForSlotFilling GoogleCloudDialogflowV2beta1IntentWebhookStateEnum = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
)

// GoogleCloudDialogflowV2beta1IntentInput
// An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
type GoogleCloudDialogflowV2beta1IntentInput struct {
	Action                   *string                                                          `json:"action,omitempty"`
	DefaultResponsePlatforms []GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum `json:"defaultResponsePlatforms,omitempty"`
	DisplayName              *string                                                          `json:"displayName,omitempty"`
	EndInteraction           *bool                                                            `json:"endInteraction,omitempty"`
	Events                   []string                                                         `json:"events,omitempty"`
	InputContextNames        []string                                                         `json:"inputContextNames,omitempty"`
	IsFallback               *bool                                                            `json:"isFallback,omitempty"`
	LiveAgentHandoff         *bool                                                            `json:"liveAgentHandoff,omitempty"`
	Messages                 []GoogleCloudDialogflowV2beta1IntentMessage                      `json:"messages,omitempty"`
	MlDisabled               *bool                                                            `json:"mlDisabled,omitempty"`
	MlEnabled                *bool                                                            `json:"mlEnabled,omitempty"`
	Name                     *string                                                          `json:"name,omitempty"`
	OutputContexts           []GoogleCloudDialogflowV2beta1Context                            `json:"outputContexts,omitempty"`
	Parameters               []GoogleCloudDialogflowV2beta1IntentParameter                    `json:"parameters,omitempty"`
	ParentFollowupIntentName *string                                                          `json:"parentFollowupIntentName,omitempty"`
	Priority                 *int32                                                           `json:"priority,omitempty"`
	ResetContexts            *bool                                                            `json:"resetContexts,omitempty"`
	TrainingPhrases          []GoogleCloudDialogflowV2beta1IntentTrainingPhrase               `json:"trainingPhrases,omitempty"`
	WebhookState             *GoogleCloudDialogflowV2beta1IntentWebhookStateEnum              `json:"webhookState,omitempty"`
}

// GoogleCloudDialogflowV2beta1Intent
// An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
type GoogleCloudDialogflowV2beta1Intent struct {
	Action                   *string                                                          `json:"action,omitempty"`
	DefaultResponsePlatforms []GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum `json:"defaultResponsePlatforms,omitempty"`
	DisplayName              *string                                                          `json:"displayName,omitempty"`
	EndInteraction           *bool                                                            `json:"endInteraction,omitempty"`
	Events                   []string                                                         `json:"events,omitempty"`
	FollowupIntentInfo       []GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo           `json:"followupIntentInfo,omitempty"`
	InputContextNames        []string                                                         `json:"inputContextNames,omitempty"`
	IsFallback               *bool                                                            `json:"isFallback,omitempty"`
	LiveAgentHandoff         *bool                                                            `json:"liveAgentHandoff,omitempty"`
	Messages                 []GoogleCloudDialogflowV2beta1IntentMessage                      `json:"messages,omitempty"`
	MlDisabled               *bool                                                            `json:"mlDisabled,omitempty"`
	MlEnabled                *bool                                                            `json:"mlEnabled,omitempty"`
	Name                     *string                                                          `json:"name,omitempty"`
	OutputContexts           []GoogleCloudDialogflowV2beta1Context                            `json:"outputContexts,omitempty"`
	Parameters               []GoogleCloudDialogflowV2beta1IntentParameter                    `json:"parameters,omitempty"`
	ParentFollowupIntentName *string                                                          `json:"parentFollowupIntentName,omitempty"`
	Priority                 *int32                                                           `json:"priority,omitempty"`
	ResetContexts            *bool                                                            `json:"resetContexts,omitempty"`
	RootFollowupIntentName   *string                                                          `json:"rootFollowupIntentName,omitempty"`
	TrainingPhrases          []GoogleCloudDialogflowV2beta1IntentTrainingPhrase               `json:"trainingPhrases,omitempty"`
	WebhookState             *GoogleCloudDialogflowV2beta1IntentWebhookStateEnum              `json:"webhookState,omitempty"`
}
