package shared

type GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum string

const (
	GoogleCloudRetailV2alphaServingConfigDiversityTypeEnumDiversityTypeUnspecified GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum = "DIVERSITY_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2alphaServingConfigDiversityTypeEnumRuleBasedDiversity       GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum = "RULE_BASED_DIVERSITY"
	GoogleCloudRetailV2alphaServingConfigDiversityTypeEnumDataDrivenDiversity      GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum = "DATA_DRIVEN_DIVERSITY"
)

type GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum string

const (
	GoogleCloudRetailV2alphaServingConfigSolutionTypesEnumSolutionTypeUnspecified    GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum = "SOLUTION_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2alphaServingConfigSolutionTypesEnumSolutionTypeRecommendation GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum = "SOLUTION_TYPE_RECOMMENDATION"
	GoogleCloudRetailV2alphaServingConfigSolutionTypesEnumSolutionTypeSearch         GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum = "SOLUTION_TYPE_SEARCH"
)

type GoogleCloudRetailV2alphaServingConfig struct {
	BoostControlIds           []string                                                  `json:"boostControlIds"`
	DisplayName               *string                                                   `json:"displayName"`
	DiversityLevel            *string                                                   `json:"diversityLevel"`
	DiversityType             *GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum   `json:"diversityType"`
	DoNotAssociateControlIds  []string                                                  `json:"doNotAssociateControlIds"`
	DynamicFacetSpec          *GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec"`
	EnableCategoryFilterLevel *string                                                   `json:"enableCategoryFilterLevel"`
	FacetControlIds           []string                                                  `json:"facetControlIds"`
	FilterControlIds          []string                                                  `json:"filterControlIds"`
	IgnoreControlIds          []string                                                  `json:"ignoreControlIds"`
	ModelID                   *string                                                   `json:"modelId"`
	Name                      *string                                                   `json:"name"`
	OnewaySynonymsControlIds  []string                                                  `json:"onewaySynonymsControlIds"`
	PersonalizationSpec       *GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec `json:"personalizationSpec"`
	PriceRerankingLevel       *string                                                   `json:"priceRerankingLevel"`
	RedirectControlIds        []string                                                  `json:"redirectControlIds"`
	ReplacementControlIds     []string                                                  `json:"replacementControlIds"`
	SolutionTypes             []GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum  `json:"solutionTypes"`
	TwowaySynonymsControlIds  []string                                                  `json:"twowaySynonymsControlIds"`
}
