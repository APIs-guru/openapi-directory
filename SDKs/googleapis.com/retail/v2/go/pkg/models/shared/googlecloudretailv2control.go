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

// GoogleCloudRetailV2ControlInput
// Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
type GoogleCloudRetailV2ControlInput struct {
	DisplayName           *string                                               `json:"displayName,omitempty"`
	Name                  *string                                               `json:"name,omitempty"`
	Rule                  *GoogleCloudRetailV2Rule                              `json:"rule,omitempty"`
	SearchSolutionUseCase []GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum `json:"searchSolutionUseCase,omitempty"`
	SolutionTypes         []GoogleCloudRetailV2ControlSolutionTypesEnum         `json:"solutionTypes,omitempty"`
}

// GoogleCloudRetailV2Control
// Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
type GoogleCloudRetailV2Control struct {
	AssociatedServingConfigIds []string                                              `json:"associatedServingConfigIds,omitempty"`
	DisplayName                *string                                               `json:"displayName,omitempty"`
	Name                       *string                                               `json:"name,omitempty"`
	Rule                       *GoogleCloudRetailV2Rule                              `json:"rule,omitempty"`
	SearchSolutionUseCase      []GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum `json:"searchSolutionUseCase,omitempty"`
	SolutionTypes              []GoogleCloudRetailV2ControlSolutionTypesEnum         `json:"solutionTypes,omitempty"`
}
