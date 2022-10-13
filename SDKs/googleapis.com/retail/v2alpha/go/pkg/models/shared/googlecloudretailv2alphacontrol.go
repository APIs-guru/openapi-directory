package shared

type GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum string

const (
	GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
	GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseSearch      GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_SEARCH"
	GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseBrowse      GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_BROWSE"
)

type GoogleCloudRetailV2alphaControlSolutionTypesEnum string

const (
	GoogleCloudRetailV2alphaControlSolutionTypesEnumSolutionTypeUnspecified    GoogleCloudRetailV2alphaControlSolutionTypesEnum = "SOLUTION_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2alphaControlSolutionTypesEnumSolutionTypeRecommendation GoogleCloudRetailV2alphaControlSolutionTypesEnum = "SOLUTION_TYPE_RECOMMENDATION"
	GoogleCloudRetailV2alphaControlSolutionTypesEnumSolutionTypeSearch         GoogleCloudRetailV2alphaControlSolutionTypesEnum = "SOLUTION_TYPE_SEARCH"
)

type GoogleCloudRetailV2alphaControl struct {
	AssociatedServingConfigIds []string                                                   `json:"associatedServingConfigIds"`
	DisplayName                *string                                                    `json:"displayName"`
	FacetSpec                  *GoogleCloudRetailV2alphaSearchRequestFacetSpec            `json:"facetSpec"`
	Name                       *string                                                    `json:"name"`
	Rule                       *GoogleCloudRetailV2alphaRule                              `json:"rule"`
	SearchSolutionUseCase      []GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum `json:"searchSolutionUseCase"`
	SolutionTypes              []GoogleCloudRetailV2alphaControlSolutionTypesEnum         `json:"solutionTypes"`
}
