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
	BoostControlIds           []string                                                 `json:"boostControlIds,omitempty"`
	DisplayName               *string                                                  `json:"displayName,omitempty"`
	DiversityLevel            *string                                                  `json:"diversityLevel,omitempty"`
	DiversityType             *GoogleCloudRetailV2betaServingConfigDiversityTypeEnum   `json:"diversityType,omitempty"`
	DoNotAssociateControlIds  []string                                                 `json:"doNotAssociateControlIds,omitempty"`
	DynamicFacetSpec          *GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec,omitempty"`
	EnableCategoryFilterLevel *string                                                  `json:"enableCategoryFilterLevel,omitempty"`
	FacetControlIds           []string                                                 `json:"facetControlIds,omitempty"`
	FilterControlIds          []string                                                 `json:"filterControlIds,omitempty"`
	IgnoreControlIds          []string                                                 `json:"ignoreControlIds,omitempty"`
	ModelID                   *string                                                  `json:"modelId,omitempty"`
	Name                      *string                                                  `json:"name,omitempty"`
	OnewaySynonymsControlIds  []string                                                 `json:"onewaySynonymsControlIds,omitempty"`
	PersonalizationSpec       *GoogleCloudRetailV2betaSearchRequestPersonalizationSpec `json:"personalizationSpec,omitempty"`
	PriceRerankingLevel       *string                                                  `json:"priceRerankingLevel,omitempty"`
	RedirectControlIds        []string                                                 `json:"redirectControlIds,omitempty"`
	ReplacementControlIds     []string                                                 `json:"replacementControlIds,omitempty"`
	SolutionTypes             []GoogleCloudRetailV2betaServingConfigSolutionTypesEnum  `json:"solutionTypes,omitempty"`
	TwowaySynonymsControlIds  []string                                                 `json:"twowaySynonymsControlIds,omitempty"`
}
