import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Rule } from "./googlecloudretailv2rule";


export enum GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED",
    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH",
    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}

export enum GoogleCloudRetailV2ControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}


// GoogleCloudRetailV2Control
/** 
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export class GoogleCloudRetailV2Control extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedServingConfigIds" })
  associatedServingConfigIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: GoogleCloudRetailV2Rule;

  @SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" })
  searchSolutionUseCase?: GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum[];

  @SpeakeasyMetadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2ControlSolutionTypesEnum[];
}


// GoogleCloudRetailV2ControlInput
/** 
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export class GoogleCloudRetailV2ControlInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: GoogleCloudRetailV2Rule;

  @SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" })
  searchSolutionUseCase?: GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum[];

  @SpeakeasyMetadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2ControlSolutionTypesEnum[];
}
