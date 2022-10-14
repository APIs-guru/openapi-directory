package shared

type GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum string

const (
	GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
	GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseSearch      GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_SEARCH"
	GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseBrowse      GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_BROWSE"
)

type GoogleCloudRetailV2betaControlSolutionTypesEnum string

const (
	GoogleCloudRetailV2betaControlSolutionTypesEnumSolutionTypeUnspecified    GoogleCloudRetailV2betaControlSolutionTypesEnum = "SOLUTION_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2betaControlSolutionTypesEnumSolutionTypeRecommendation GoogleCloudRetailV2betaControlSolutionTypesEnum = "SOLUTION_TYPE_RECOMMENDATION"
	GoogleCloudRetailV2betaControlSolutionTypesEnumSolutionTypeSearch         GoogleCloudRetailV2betaControlSolutionTypesEnum = "SOLUTION_TYPE_SEARCH"
)

type GoogleCloudRetailV2betaControl struct {
	AssociatedServingConfigIds []string                                                  `json:"associatedServingConfigIds,omitempty"`
	DisplayName                *string                                                   `json:"displayName,omitempty"`
	FacetSpec                  *GoogleCloudRetailV2betaSearchRequestFacetSpec            `json:"facetSpec,omitempty"`
	Name                       *string                                                   `json:"name,omitempty"`
	Rule                       *GoogleCloudRetailV2betaRule                              `json:"rule,omitempty"`
	SearchSolutionUseCase      []GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum `json:"searchSolutionUseCase,omitempty"`
	SolutionTypes              []GoogleCloudRetailV2betaControlSolutionTypesEnum         `json:"solutionTypes,omitempty"`
}
