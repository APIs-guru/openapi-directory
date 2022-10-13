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

type GoogleCloudDialogflowV2beta1Intent struct {
	Action                   *string                                                          `json:"action"`
	DefaultResponsePlatforms []GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum `json:"defaultResponsePlatforms"`
	DisplayName              *string                                                          `json:"displayName"`
	EndInteraction           *bool                                                            `json:"endInteraction"`
	Events                   []string                                                         `json:"events"`
	FollowupIntentInfo       []GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo           `json:"followupIntentInfo"`
	InputContextNames        []string                                                         `json:"inputContextNames"`
	IsFallback               *bool                                                            `json:"isFallback"`
	LiveAgentHandoff         *bool                                                            `json:"liveAgentHandoff"`
	Messages                 []GoogleCloudDialogflowV2beta1IntentMessage                      `json:"messages"`
	MlDisabled               *bool                                                            `json:"mlDisabled"`
	MlEnabled                *bool                                                            `json:"mlEnabled"`
	Name                     *string                                                          `json:"name"`
	OutputContexts           []GoogleCloudDialogflowV2beta1Context                            `json:"outputContexts"`
	Parameters               []GoogleCloudDialogflowV2beta1IntentParameter                    `json:"parameters"`
	ParentFollowupIntentName *string                                                          `json:"parentFollowupIntentName"`
	Priority                 *int32                                                           `json:"priority"`
	ResetContexts            *bool                                                            `json:"resetContexts"`
	RootFollowupIntentName   *string                                                          `json:"rootFollowupIntentName"`
	TrainingPhrases          []GoogleCloudDialogflowV2beta1IntentTrainingPhrase               `json:"trainingPhrases"`
	WebhookState             *GoogleCloudDialogflowV2beta1IntentWebhookStateEnum              `json:"webhookState"`
}
