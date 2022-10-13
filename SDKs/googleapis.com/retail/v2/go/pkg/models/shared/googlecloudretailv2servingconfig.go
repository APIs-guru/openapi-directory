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
	BoostControlIds           []string                                             `json:"boostControlIds"`
	DisplayName               *string                                              `json:"displayName"`
	DiversityLevel            *string                                              `json:"diversityLevel"`
	DiversityType             *GoogleCloudRetailV2ServingConfigDiversityTypeEnum   `json:"diversityType"`
	DoNotAssociateControlIds  []string                                             `json:"doNotAssociateControlIds"`
	DynamicFacetSpec          *GoogleCloudRetailV2SearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec"`
	EnableCategoryFilterLevel *string                                              `json:"enableCategoryFilterLevel"`
	FacetControlIds           []string                                             `json:"facetControlIds"`
	FilterControlIds          []string                                             `json:"filterControlIds"`
	IgnoreControlIds          []string                                             `json:"ignoreControlIds"`
	ModelID                   *string                                              `json:"modelId"`
	Name                      *string                                              `json:"name"`
	OnewaySynonymsControlIds  []string                                             `json:"onewaySynonymsControlIds"`
	PersonalizationSpec       *GoogleCloudRetailV2SearchRequestPersonalizationSpec `json:"personalizationSpec"`
	PriceRerankingLevel       *string                                              `json:"priceRerankingLevel"`
	RedirectControlIds        []string                                             `json:"redirectControlIds"`
	ReplacementControlIds     []string                                             `json:"replacementControlIds"`
	SolutionTypes             []GoogleCloudRetailV2ServingConfigSolutionTypesEnum  `json:"solutionTypes"`
	TwowaySynonymsControlIds  []string                                             `json:"twowaySynonymsControlIds"`
}
