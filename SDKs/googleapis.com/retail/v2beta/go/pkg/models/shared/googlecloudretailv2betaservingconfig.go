package shared

type GoogleCloudRetailV2betaServingConfigDiversityTypeEnum string

const (
	GoogleCloudRetailV2betaServingConfigDiversityTypeEnumDiversityTypeUnspecified GoogleCloudRetailV2betaServingConfigDiversityTypeEnum = "DIVERSITY_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2betaServingConfigDiversityTypeEnumRuleBasedDiversity       GoogleCloudRetailV2betaServingConfigDiversityTypeEnum = "RULE_BASED_DIVERSITY"
	GoogleCloudRetailV2betaServingConfigDiversityTypeEnumDataDrivenDiversity      GoogleCloudRetailV2betaServingConfigDiversityTypeEnum = "DATA_DRIVEN_DIVERSITY"
)

type GoogleCloudRetailV2betaServingConfigSolutionTypesEnum string

const (
	GoogleCloudRetailV2betaServingConfigSolutionTypesEnumSolutionTypeUnspecified    GoogleCloudRetailV2betaServingConfigSolutionTypesEnum = "SOLUTION_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2betaServingConfigSolutionTypesEnumSolutionTypeRecommendation GoogleCloudRetailV2betaServingConfigSolutionTypesEnum = "SOLUTION_TYPE_RECOMMENDATION"
	GoogleCloudRetailV2betaServingConfigSolutionTypesEnumSolutionTypeSearch         GoogleCloudRetailV2betaServingConfigSolutionTypesEnum = "SOLUTION_TYPE_SEARCH"
)

type GoogleCloudRetailV2betaServingConfig struct {
	BoostControlIds           []string                                                 `json:"boostControlIds"`
	DisplayName               *string                                                  `json:"displayName"`
	DiversityLevel            *string                                                  `json:"diversityLevel"`
	DiversityType             *GoogleCloudRetailV2betaServingConfigDiversityTypeEnum   `json:"diversityType"`
	DoNotAssociateControlIds  []string                                                 `json:"doNotAssociateControlIds"`
	DynamicFacetSpec          *GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec"`
	EnableCategoryFilterLevel *string                                                  `json:"enableCategoryFilterLevel"`
	FacetControlIds           []string                                                 `json:"facetControlIds"`
	FilterControlIds          []string                                                 `json:"filterControlIds"`
	IgnoreControlIds          []string                                                 `json:"ignoreControlIds"`
	ModelID                   *string                                                  `json:"modelId"`
	Name                      *string                                                  `json:"name"`
	OnewaySynonymsControlIds  []string                                                 `json:"onewaySynonymsControlIds"`
	PersonalizationSpec       *GoogleCloudRetailV2betaSearchRequestPersonalizationSpec `json:"personalizationSpec"`
	PriceRerankingLevel       *string                                                  `json:"priceRerankingLevel"`
	RedirectControlIds        []string                                                 `json:"redirectControlIds"`
	ReplacementControlIds     []string                                                 `json:"replacementControlIds"`
	SolutionTypes             []GoogleCloudRetailV2betaServingConfigSolutionTypesEnum  `json:"solutionTypes"`
	TwowaySynonymsControlIds  []string                                                 `json:"twowaySynonymsControlIds"`
}
