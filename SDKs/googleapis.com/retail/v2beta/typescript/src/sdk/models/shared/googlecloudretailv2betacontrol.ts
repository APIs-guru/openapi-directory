import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestFacetSpec } from "./googlecloudretailv2betasearchrequestfacetspec";
import { GoogleCloudRetailV2betaRule } from "./googlecloudretailv2betarule";


export enum GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED",
    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH",
    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}

export enum GoogleCloudRetailV2betaControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}


// GoogleCloudRetailV2betaControlInput
/** 
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export class GoogleCloudRetailV2betaControlInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=facetSpec" })
  facetSpec?: GoogleCloudRetailV2betaSearchRequestFacetSpec;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: GoogleCloudRetailV2betaRule;

  @SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" })
  searchSolutionUseCase?: GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum[];

  @SpeakeasyMetadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2betaControlSolutionTypesEnum[];
}


// GoogleCloudRetailV2betaControl
/** 
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export class GoogleCloudRetailV2betaControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedServingConfigIds" })
  associatedServingConfigIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=facetSpec" })
  facetSpec?: GoogleCloudRetailV2betaSearchRequestFacetSpec;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: GoogleCloudRetailV2betaRule;

  @SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" })
  searchSolutionUseCase?: GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum[];

  @SpeakeasyMetadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2betaControlSolutionTypesEnum[];
}
