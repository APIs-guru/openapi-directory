package shared

type GoogleCloudDialogflowV2AgentAPIVersionEnum string

const (
	GoogleCloudDialogflowV2AgentAPIVersionEnumAPIVersionUnspecified GoogleCloudDialogflowV2AgentAPIVersionEnum = "API_VERSION_UNSPECIFIED"
	GoogleCloudDialogflowV2AgentAPIVersionEnumAPIVersionV1          GoogleCloudDialogflowV2AgentAPIVersionEnum = "API_VERSION_V1"
	GoogleCloudDialogflowV2AgentAPIVersionEnumAPIVersionV2          GoogleCloudDialogflowV2AgentAPIVersionEnum = "API_VERSION_V2"
	GoogleCloudDialogflowV2AgentAPIVersionEnumAPIVersionV2Beta1     GoogleCloudDialogflowV2AgentAPIVersionEnum = "API_VERSION_V2_BETA_1"
)

type GoogleCloudDialogflowV2AgentMatchModeEnum string

const (
	GoogleCloudDialogflowV2AgentMatchModeEnumMatchModeUnspecified GoogleCloudDialogflowV2AgentMatchModeEnum = "MATCH_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2AgentMatchModeEnumMatchModeHybrid      GoogleCloudDialogflowV2AgentMatchModeEnum = "MATCH_MODE_HYBRID"
	GoogleCloudDialogflowV2AgentMatchModeEnumMatchModeMlOnly      GoogleCloudDialogflowV2AgentMatchModeEnum = "MATCH_MODE_ML_ONLY"
)

type GoogleCloudDialogflowV2AgentTierEnum string

const (
	GoogleCloudDialogflowV2AgentTierEnumTierUnspecified    GoogleCloudDialogflowV2AgentTierEnum = "TIER_UNSPECIFIED"
	GoogleCloudDialogflowV2AgentTierEnumTierStandard       GoogleCloudDialogflowV2AgentTierEnum = "TIER_STANDARD"
	GoogleCloudDialogflowV2AgentTierEnumTierEnterprise     GoogleCloudDialogflowV2AgentTierEnum = "TIER_ENTERPRISE"
	GoogleCloudDialogflowV2AgentTierEnumTierEnterprisePlus GoogleCloudDialogflowV2AgentTierEnum = "TIER_ENTERPRISE_PLUS"
)

// GoogleCloudDialogflowV2Agent
// A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system. For more information about agents, see the [Agent guide](https://cloud.google.com/dialogflow/docs/agents-overview).
type GoogleCloudDialogflowV2Agent struct {
	APIVersion              *GoogleCloudDialogflowV2AgentAPIVersionEnum `json:"apiVersion,omitempty"`
	AvatarURI               *string                                     `json:"avatarUri,omitempty"`
	ClassificationThreshold *float32                                    `json:"classificationThreshold,omitempty"`
	DefaultLanguageCode     *string                                     `json:"defaultLanguageCode,omitempty"`
	Description             *string                                     `json:"description,omitempty"`
	DisplayName             *string                                     `json:"displayName,omitempty"`
	EnableLogging           *bool                                       `json:"enableLogging,omitempty"`
	MatchMode               *GoogleCloudDialogflowV2AgentMatchModeEnum  `json:"matchMode,omitempty"`
	Parent                  *string                                     `json:"parent,omitempty"`
	SupportedLanguageCodes  []string                                    `json:"supportedLanguageCodes,omitempty"`
	Tier                    *GoogleCloudDialogflowV2AgentTierEnum       `json:"tier,omitempty"`
	TimeZone                *string                                     `json:"timeZone,omitempty"`
}
