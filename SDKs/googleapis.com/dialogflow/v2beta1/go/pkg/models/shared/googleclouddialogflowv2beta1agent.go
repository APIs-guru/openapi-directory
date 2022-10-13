package shared

type GoogleCloudDialogflowV2beta1AgentAPIVersionEnum string

const (
	GoogleCloudDialogflowV2beta1AgentAPIVersionEnumAPIVersionUnspecified GoogleCloudDialogflowV2beta1AgentAPIVersionEnum = "API_VERSION_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentAPIVersionEnumAPIVersionV1          GoogleCloudDialogflowV2beta1AgentAPIVersionEnum = "API_VERSION_V1"
	GoogleCloudDialogflowV2beta1AgentAPIVersionEnumAPIVersionV2          GoogleCloudDialogflowV2beta1AgentAPIVersionEnum = "API_VERSION_V2"
	GoogleCloudDialogflowV2beta1AgentAPIVersionEnumAPIVersionV2Beta1     GoogleCloudDialogflowV2beta1AgentAPIVersionEnum = "API_VERSION_V2_BETA_1"
)

type GoogleCloudDialogflowV2beta1AgentMatchModeEnum string

const (
	GoogleCloudDialogflowV2beta1AgentMatchModeEnumMatchModeUnspecified GoogleCloudDialogflowV2beta1AgentMatchModeEnum = "MATCH_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentMatchModeEnumMatchModeHybrid      GoogleCloudDialogflowV2beta1AgentMatchModeEnum = "MATCH_MODE_HYBRID"
	GoogleCloudDialogflowV2beta1AgentMatchModeEnumMatchModeMlOnly      GoogleCloudDialogflowV2beta1AgentMatchModeEnum = "MATCH_MODE_ML_ONLY"
)

type GoogleCloudDialogflowV2beta1AgentTierEnum string

const (
	GoogleCloudDialogflowV2beta1AgentTierEnumTierUnspecified    GoogleCloudDialogflowV2beta1AgentTierEnum = "TIER_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentTierEnumTierStandard       GoogleCloudDialogflowV2beta1AgentTierEnum = "TIER_STANDARD"
	GoogleCloudDialogflowV2beta1AgentTierEnumTierEnterprise     GoogleCloudDialogflowV2beta1AgentTierEnum = "TIER_ENTERPRISE"
	GoogleCloudDialogflowV2beta1AgentTierEnumTierEnterprisePlus GoogleCloudDialogflowV2beta1AgentTierEnum = "TIER_ENTERPRISE_PLUS"
)

type GoogleCloudDialogflowV2beta1Agent struct {
	APIVersion              *GoogleCloudDialogflowV2beta1AgentAPIVersionEnum `json:"apiVersion"`
	AvatarURI               *string                                          `json:"avatarUri"`
	ClassificationThreshold *float32                                         `json:"classificationThreshold"`
	DefaultLanguageCode     *string                                          `json:"defaultLanguageCode"`
	Description             *string                                          `json:"description"`
	DisplayName             *string                                          `json:"displayName"`
	EnableLogging           *bool                                            `json:"enableLogging"`
	MatchMode               *GoogleCloudDialogflowV2beta1AgentMatchModeEnum  `json:"matchMode"`
	Parent                  *string                                          `json:"parent"`
	SupportedLanguageCodes  []string                                         `json:"supportedLanguageCodes"`
	Tier                    *GoogleCloudDialogflowV2beta1AgentTierEnum       `json:"tier"`
	TimeZone                *string                                          `json:"timeZone"`
}
