import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2Rule } from "./googlecloudretailv2rule";

export enum GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
,    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH"
,    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}

export enum GoogleCloudRetailV2ControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED"
,    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION"
,    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}


// GoogleCloudRetailV2Control
/** 
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export class GoogleCloudRetailV2Control extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedServingConfigIds" })
  associatedServingConfigIds?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rule" })
  rule?: GoogleCloudRetailV2Rule;

  @Metadata({ data: "json, name=searchSolutionUseCase" })
  searchSolutionUseCase?: GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum[];

  @Metadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2ControlSolutionTypesEnum[];
}
