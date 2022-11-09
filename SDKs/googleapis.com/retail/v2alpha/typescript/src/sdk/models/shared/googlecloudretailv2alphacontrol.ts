import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
import { GoogleCloudRetailV2alphaRule } from "./googlecloudretailv2alpharule";

export enum GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
,    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH"
,    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}

export enum GoogleCloudRetailV2alphaControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED"
,    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION"
,    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}


// GoogleCloudRetailV2alphaControl
/** 
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
export class GoogleCloudRetailV2alphaControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedServingConfigIds" })
  associatedServingConfigIds?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=facetSpec" })
  facetSpec?: GoogleCloudRetailV2alphaSearchRequestFacetSpec;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rule" })
  rule?: GoogleCloudRetailV2alphaRule;

  @Metadata({ data: "json, name=searchSolutionUseCase" })
  searchSolutionUseCase?: GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum[];

  @Metadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2alphaControlSolutionTypesEnum[];
}
