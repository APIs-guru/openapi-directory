import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2betasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2betaSearchRequestPersonalizationSpec } from "./googlecloudretailv2betasearchrequestpersonalizationspec";


export enum GoogleCloudRetailV2betaServingConfigDiversityTypeEnum {
    DiversityTypeUnspecified = "DIVERSITY_TYPE_UNSPECIFIED",
    RuleBasedDiversity = "RULE_BASED_DIVERSITY",
    DataDrivenDiversity = "DATA_DRIVEN_DIVERSITY"
}

export enum GoogleCloudRetailV2betaServingConfigSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}


// GoogleCloudRetailV2betaServingConfig
/** 
 * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
**/
export class GoogleCloudRetailV2betaServingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boostControlIds" })
  boostControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=diversityLevel" })
  diversityLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=diversityType" })
  diversityType?: GoogleCloudRetailV2betaServingConfigDiversityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=doNotAssociateControlIds" })
  doNotAssociateControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;

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
  personalizationSpec?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;

  @SpeakeasyMetadata({ data: "json, name=priceRerankingLevel" })
  priceRerankingLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=redirectControlIds" })
  redirectControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=replacementControlIds" })
  replacementControlIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2betaServingConfigSolutionTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=twowaySynonymsControlIds" })
  twowaySynonymsControlIds?: string[];
}
