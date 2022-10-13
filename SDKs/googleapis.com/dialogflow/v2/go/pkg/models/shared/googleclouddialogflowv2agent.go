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
	APIVersion              *GoogleCloudDialogflowV2AgentAPIVersionEnum `json:"apiVersion"`
	AvatarURI               *string                                     `json:"avatarUri"`
	ClassificationThreshold *float32                                    `json:"classificationThreshold"`
	DefaultLanguageCode     *string                                     `json:"defaultLanguageCode"`
	Description             *string                                     `json:"description"`
	DisplayName             *string                                     `json:"displayName"`
	EnableLogging           *bool                                       `json:"enableLogging"`
	MatchMode               *GoogleCloudDialogflowV2AgentMatchModeEnum  `json:"matchMode"`
	Parent                  *string                                     `json:"parent"`
	SupportedLanguageCodes  []string                                    `json:"supportedLanguageCodes"`
	Tier                    *GoogleCloudDialogflowV2AgentTierEnum       `json:"tier"`
	TimeZone                *string                                     `json:"timeZone"`
}
