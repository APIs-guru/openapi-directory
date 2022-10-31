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
