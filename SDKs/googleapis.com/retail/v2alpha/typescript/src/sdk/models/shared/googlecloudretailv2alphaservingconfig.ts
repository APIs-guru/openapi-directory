import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2alphasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec } from "./googlecloudretailv2alphasearchrequestpersonalizationspec";


export enum GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum {
    DiversityTypeUnspecified = "DIVERSITY_TYPE_UNSPECIFIED",
    RuleBasedDiversity = "RULE_BASED_DIVERSITY",
    DataDrivenDiversity = "DATA_DRIVEN_DIVERSITY"
}

export enum GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}


// GoogleCloudRetailV2alphaServingConfig
/** 
 * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
**/
export class GoogleCloudRetailV2alphaServingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boostControlIds" })
  boostControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=diversityLevel" })
  diversityLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=diversityType" })
  diversityType?: GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=doNotAssociateControlIds" })
  doNotAssociateControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;

  @SpeakeasyMetadata({ data: "json, name=enableCategoryFilterLevel" })
  enableCategoryFilterLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=facetControlIds" })
  facetControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=filterControlIds" })
  filterControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ignoreControlIds" })
  ignoreControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onewaySynonymsControlIds" })
  onewaySynonymsControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=personalizationSpec" })
  personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;

  @SpeakeasyMetadata({ data: "json, name=priceRerankingLevel" })
  priceRerankingLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=redirectControlIds" })
  redirectControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=replacementControlIds" })
  replacementControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=twowaySynonymsControlIds" })
  twowaySynonymsControlIds?: string[];
}
