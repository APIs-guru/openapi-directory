import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Rule } from "./googlecloudretailv2rule";
export declare enum GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED",
    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH",
    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}
export declare enum GoogleCloudRetailV2ControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export declare class GoogleCloudRetailV2Control extends SpeakeasyBase {
    associatedServingConfigIds?: string[];
    displayName?: string;
    name?: string;
    rule?: GoogleCloudRetailV2Rule;
    searchSolutionUseCase?: GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum[];
    solutionTypes?: GoogleCloudRetailV2ControlSolutionTypesEnum[];
}
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export declare class GoogleCloudRetailV2ControlInput extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    rule?: GoogleCloudRetailV2Rule;
    searchSolutionUseCase?: GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum[];
    solutionTypes?: GoogleCloudRetailV2ControlSolutionTypesEnum[];
}
