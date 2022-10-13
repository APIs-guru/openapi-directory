package shared

type GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum string

const (
	GoogleCloudRetailV2ControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
	GoogleCloudRetailV2ControlSearchSolutionUseCaseEnumSearchSolutionUseCaseSearch      GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_SEARCH"
	GoogleCloudRetailV2ControlSearchSolutionUseCaseEnumSearchSolutionUseCaseBrowse      GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_BROWSE"
)

type GoogleCloudRetailV2ControlSolutionTypesEnum string

const (
	GoogleCloudRetailV2ControlSolutionTypesEnumSolutionTypeUnspecified    GoogleCloudRetailV2ControlSolutionTypesEnum = "SOLUTION_TYPE_UNSPECIFIED"
	GoogleCloudRetailV2ControlSolutionTypesEnumSolutionTypeRecommendation GoogleCloudRetailV2ControlSolutionTypesEnum = "SOLUTION_TYPE_RECOMMENDATION"
	GoogleCloudRetailV2ControlSolutionTypesEnumSolutionTypeSearch         GoogleCloudRetailV2ControlSolutionTypesEnum = "SOLUTION_TYPE_SEARCH"
)

type GoogleCloudRetailV2Control struct {
	AssociatedServingConfigIds []string                                              `json:"associatedServingConfigIds"`
	DisplayName                *string                                               `json:"displayName"`
	Name                       *string                                               `json:"name"`
	Rule                       *GoogleCloudRetailV2Rule                              `json:"rule"`
	SearchSolutionUseCase      []GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum `json:"searchSolutionUseCase"`
	SolutionTypes              []GoogleCloudRetailV2ControlSolutionTypesEnum         `json:"solutionTypes"`
}
