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

// GoogleCloudRetailV2alphaServingConfig
// Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
type GoogleCloudRetailV2alphaServingConfig struct {
	BoostControlIds           []string                                                  `json:"boostControlIds,omitempty"`
	DisplayName               *string                                                   `json:"displayName,omitempty"`
	DiversityLevel            *string                                                   `json:"diversityLevel,omitempty"`
	DiversityType             *GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum   `json:"diversityType,omitempty"`
	DoNotAssociateControlIds  []string                                                  `json:"doNotAssociateControlIds,omitempty"`
	DynamicFacetSpec          *GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec,omitempty"`
	EnableCategoryFilterLevel *string                                                   `json:"enableCategoryFilterLevel,omitempty"`
	FacetControlIds           []string                                                  `json:"facetControlIds,omitempty"`
	FilterControlIds          []string                                                  `json:"filterControlIds,omitempty"`
	IgnoreControlIds          []string                                                  `json:"ignoreControlIds,omitempty"`
	ModelID                   *string                                                   `json:"modelId,omitempty"`
	Name                      *string                                                   `json:"name,omitempty"`
	OnewaySynonymsControlIds  []string                                                  `json:"onewaySynonymsControlIds,omitempty"`
	PersonalizationSpec       *GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec `json:"personalizationSpec,omitempty"`
	PriceRerankingLevel       *string                                                   `json:"priceRerankingLevel,omitempty"`
	RedirectControlIds        []string                                                  `json:"redirectControlIds,omitempty"`
	ReplacementControlIds     []string                                                  `json:"replacementControlIds,omitempty"`
	SolutionTypes             []GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum  `json:"solutionTypes,omitempty"`
	TwowaySynonymsControlIds  []string                                                  `json:"twowaySynonymsControlIds,omitempty"`
}
