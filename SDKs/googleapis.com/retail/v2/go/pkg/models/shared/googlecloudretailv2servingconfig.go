package shared

type GoogleCloudRetailV2ServingConfigDiversityTypeEnum string

const (
	GoogleCloudRetailV2ServingConfigDiversityTypeEnumDiversityTypeUnspecified GoogleCloudRetailV2ServingConfigDiversityTypeEnum = "DIVERSITY_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2ServingConfigDiversityTypeEnumRuleBasedDiversity       GoogleCloudRetailV2ServingConfigDiversityTypeEnum = "RULE_BASED_DIVERSITY"
	GoogleCloudRetailV2ServingConfigDiversityTypeEnumDataDrivenDiversity      GoogleCloudRetailV2ServingConfigDiversityTypeEnum = "DATA_DRIVEN_DIVERSITY"
)

type GoogleCloudRetailV2ServingConfigSolutionTypesEnum string

const (
	GoogleCloudRetailV2ServingConfigSolutionTypesEnumSolutionTypeUnspecified    GoogleCloudRetailV2ServingConfigSolutionTypesEnum = "SOLUTION_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2ServingConfigSolutionTypesEnumSolutionTypeRecommendation GoogleCloudRetailV2ServingConfigSolutionTypesEnum = "SOLUTION_TYPE_RECOMMENDATION"
	GoogleCloudRetailV2ServingConfigSolutionTypesEnumSolutionTypeSearch         GoogleCloudRetailV2ServingConfigSolutionTypesEnum = "SOLUTION_TYPE_SEARCH"
)

type GoogleCloudRetailV2ServingConfig struct {
	BoostControlIds           []string                                             `json:"boostControlIds,omitempty"`
	DisplayName               *string                                              `json:"displayName,omitempty"`
	DiversityLevel            *string                                              `json:"diversityLevel,omitempty"`
	DiversityType             *GoogleCloudRetailV2ServingConfigDiversityTypeEnum   `json:"diversityType,omitempty"`
	DoNotAssociateControlIds  []string                                             `json:"doNotAssociateControlIds,omitempty"`
	DynamicFacetSpec          *GoogleCloudRetailV2SearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec,omitempty"`
	EnableCategoryFilterLevel *string                                              `json:"enableCategoryFilterLevel,omitempty"`
	FacetControlIds           []string                                             `json:"facetControlIds,omitempty"`
	FilterControlIds          []string                                             `json:"filterControlIds,omitempty"`
	IgnoreControlIds          []string                                             `json:"ignoreControlIds,omitempty"`
	ModelID                   *string                                              `json:"modelId,omitempty"`
	Name                      *string                                              `json:"name,omitempty"`
	OnewaySynonymsControlIds  []string                                             `json:"onewaySynonymsControlIds,omitempty"`
	PersonalizationSpec       *GoogleCloudRetailV2SearchRequestPersonalizationSpec `json:"personalizationSpec,omitempty"`
	PriceRerankingLevel       *string                                              `json:"priceRerankingLevel,omitempty"`
	RedirectControlIds        []string                                             `json:"redirectControlIds,omitempty"`
	ReplacementControlIds     []string                                             `json:"replacementControlIds,omitempty"`
	SolutionTypes             []GoogleCloudRetailV2ServingConfigSolutionTypesEnum  `json:"solutionTypes,omitempty"`
	TwowaySynonymsControlIds  []string                                             `json:"twowaySynonymsControlIds,omitempty"`
}
