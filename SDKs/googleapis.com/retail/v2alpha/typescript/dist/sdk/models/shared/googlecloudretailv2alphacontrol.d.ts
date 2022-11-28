import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
import { GoogleCloudRetailV2alphaRule } from "./googlecloudretailv2alpharule";
export declare enum GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED",
    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH",
    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}
export declare enum GoogleCloudRetailV2alphaControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export declare class GoogleCloudRetailV2alphaControl extends SpeakeasyBase {
    associatedServingConfigIds?: string[];
    displayName?: string;
    facetSpec?: GoogleCloudRetailV2alphaSearchRequestFacetSpec;
    name?: string;
    rule?: GoogleCloudRetailV2alphaRule;
    searchSolutionUseCase?: GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum[];
    solutionTypes?: GoogleCloudRetailV2alphaControlSolutionTypesEnum[];
}
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export declare class GoogleCloudRetailV2alphaControlInput extends SpeakeasyBase {
    displayName?: string;
    facetSpec?: GoogleCloudRetailV2alphaSearchRequestFacetSpec;
    name?: string;
    rule?: GoogleCloudRetailV2alphaRule;
    searchSolutionUseCase?: GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum[];
    solutionTypes?: GoogleCloudRetailV2alphaControlSolutionTypesEnum[];
}
