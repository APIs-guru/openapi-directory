import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestFacetSpec } from "./googlecloudretailv2betasearchrequestfacetspec";
import { GoogleCloudRetailV2betaRule } from "./googlecloudretailv2betarule";
export declare enum GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED",
    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH",
    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}
export declare enum GoogleCloudRetailV2betaControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export declare class GoogleCloudRetailV2betaControlInput extends SpeakeasyBase {
    displayName?: string;
    facetSpec?: GoogleCloudRetailV2betaSearchRequestFacetSpec;
    name?: string;
    rule?: GoogleCloudRetailV2betaRule;
    searchSolutionUseCase?: GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum[];
    solutionTypes?: GoogleCloudRetailV2betaControlSolutionTypesEnum[];
}
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export declare class GoogleCloudRetailV2betaControl extends SpeakeasyBase {
    associatedServingConfigIds?: string[];
    displayName?: string;
    facetSpec?: GoogleCloudRetailV2betaSearchRequestFacetSpec;
    name?: string;
    rule?: GoogleCloudRetailV2betaRule;
    searchSolutionUseCase?: GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum[];
    solutionTypes?: GoogleCloudRetailV2betaControlSolutionTypesEnum[];
}
