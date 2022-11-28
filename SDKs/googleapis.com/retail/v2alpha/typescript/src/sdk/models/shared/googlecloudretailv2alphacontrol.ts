import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
import { GoogleCloudRetailV2alphaRule } from "./googlecloudretailv2alpharule";


export enum GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED",
    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH",
    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}

export enum GoogleCloudRetailV2alphaControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}


// GoogleCloudRetailV2alphaControl
/** 
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export class GoogleCloudRetailV2alphaControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedServingConfigIds" })
  associatedServingConfigIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=facetSpec" })
  facetSpec?: GoogleCloudRetailV2alphaSearchRequestFacetSpec;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: GoogleCloudRetailV2alphaRule;

  @SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" })
  searchSolutionUseCase?: GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum[];

  @SpeakeasyMetadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2alphaControlSolutionTypesEnum[];
}


// GoogleCloudRetailV2alphaControlInput
/** 
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export class GoogleCloudRetailV2alphaControlInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=facetSpec" })
  facetSpec?: GoogleCloudRetailV2alphaSearchRequestFacetSpec;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: GoogleCloudRetailV2alphaRule;

  @SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" })
  searchSolutionUseCase?: GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum[];

  @SpeakeasyMetadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2alphaControlSolutionTypesEnum[];
}
