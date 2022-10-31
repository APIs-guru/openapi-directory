package shared




type GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum string

const (
    GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseSearch GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_SEARCH"
GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseBrowse GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum = "SEARCH_SOLUTION_USE_CASE_BROWSE"
)



type GoogleCloudRetailV2alphaControlSolutionTypesEnum string

const (
    GoogleCloudRetailV2alphaControlSolutionTypesEnumSolutionTypeUnspecified GoogleCloudRetailV2alphaControlSolutionTypesEnum = "SOLUTION_TYPE_UNSPECIFIED"
GoogleCloudRetailV2alphaControlSolutionTypesEnumSolutionTypeRecommendation GoogleCloudRetailV2alphaControlSolutionTypesEnum = "SOLUTION_TYPE_RECOMMENDATION"
GoogleCloudRetailV2alphaControlSolutionTypesEnumSolutionTypeSearch GoogleCloudRetailV2alphaControlSolutionTypesEnum = "SOLUTION_TYPE_SEARCH"
)


type GoogleCloudRetailV2alphaControl struct {
    AssociatedServingConfigIds []string `json:"associatedServingConfigIds,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    FacetSpec *GoogleCloudRetailV2alphaSearchRequestFacetSpec `json:"facetSpec,omitempty"`
    Name *string `json:"name,omitempty"`
    Rule *GoogleCloudRetailV2alphaRule `json:"rule,omitempty"`
    SearchSolutionUseCase []GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum `json:"searchSolutionUseCase,omitempty"`
    SolutionTypes []GoogleCloudRetailV2alphaControlSolutionTypesEnum `json:"solutionTypes,omitempty"`
    
}

