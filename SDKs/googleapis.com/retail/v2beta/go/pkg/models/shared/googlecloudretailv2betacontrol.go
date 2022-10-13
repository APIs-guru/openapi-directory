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
	AssociatedServingConfigIds []string                                                  `json:"associatedServingConfigIds"`
	DisplayName                *string                                                   `json:"displayName"`
	FacetSpec                  *GoogleCloudRetailV2betaSearchRequestFacetSpec            `json:"facetSpec"`
	Name                       *string                                                   `json:"name"`
	Rule                       *GoogleCloudRetailV2betaRule                              `json:"rule"`
	SearchSolutionUseCase      []GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum `json:"searchSolutionUseCase"`
	SolutionTypes              []GoogleCloudRetailV2betaControlSolutionTypesEnum         `json:"solutionTypes"`
}
