package shared




type GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum string

const (
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumPlatformUnspecified GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "PLATFORM_UNSPECIFIED"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumFacebook GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "FACEBOOK"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSlack GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "SLACK"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumTelegram GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "TELEGRAM"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumKik GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "KIK"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSkype GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "SKYPE"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumLine GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "LINE"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumViber GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "VIBER"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumActionsOnGoogle GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "ACTIONS_ON_GOOGLE"
GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumGoogleHangouts GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = "GOOGLE_HANGOUTS"
)



type GoogleCloudDialogflowV2IntentWebhookStateEnum string

const (
    GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateUnspecified GoogleCloudDialogflowV2IntentWebhookStateEnum = "WEBHOOK_STATE_UNSPECIFIED"
GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabled GoogleCloudDialogflowV2IntentWebhookStateEnum = "WEBHOOK_STATE_ENABLED"
GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabledForSlotFilling GoogleCloudDialogflowV2IntentWebhookStateEnum = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
)


type GoogleCloudDialogflowV2Intent struct {
    Action *string `json:"action,omitempty"`
    DefaultResponsePlatforms []GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum `json:"defaultResponsePlatforms,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EndInteraction *bool `json:"endInteraction,omitempty"`
    Events []string `json:"events,omitempty"`
    FollowupIntentInfo []GoogleCloudDialogflowV2IntentFollowupIntentInfo `json:"followupIntentInfo,omitempty"`
    InputContextNames []string `json:"inputContextNames,omitempty"`
    IsFallback *bool `json:"isFallback,omitempty"`
    LiveAgentHandoff *bool `json:"liveAgentHandoff,omitempty"`
    Messages []GoogleCloudDialogflowV2IntentMessage `json:"messages,omitempty"`
    MlDisabled *bool `json:"mlDisabled,omitempty"`
    Name *string `json:"name,omitempty"`
    OutputContexts []GoogleCloudDialogflowV2Context `json:"outputContexts,omitempty"`
    Parameters []GoogleCloudDialogflowV2IntentParameter `json:"parameters,omitempty"`
    ParentFollowupIntentName *string `json:"parentFollowupIntentName,omitempty"`
    Priority *int32 `json:"priority,omitempty"`
    ResetContexts *bool `json:"resetContexts,omitempty"`
    RootFollowupIntentName *string `json:"rootFollowupIntentName,omitempty"`
    TrainingPhrases []GoogleCloudDialogflowV2IntentTrainingPhrase `json:"trainingPhrases,omitempty"`
    WebhookState *GoogleCloudDialogflowV2IntentWebhookStateEnum `json:"webhookState,omitempty"`
    
}

