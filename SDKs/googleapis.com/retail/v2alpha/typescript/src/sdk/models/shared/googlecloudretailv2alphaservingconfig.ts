import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2alphasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec } from "./googlecloudretailv2alphasearchrequestpersonalizationspec";

export enum GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum {
    DiversityTypeUnspecified = "DIVERSITY_TYPE_UNSPECIFIED"
,    RuleBasedDiversity = "RULE_BASED_DIVERSITY"
,    DataDrivenDiversity = "DATA_DRIVEN_DIVERSITY"
}

export enum GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED"
,    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION"
,    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}


// GoogleCloudRetailV2alphaServingConfig
/** 
 * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
**/
export class GoogleCloudRetailV2alphaServingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=boostControlIds" })
  boostControlIds?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=diversityLevel" })
  diversityLevel?: string;

  @Metadata({ data: "json, name=diversityType" })
  diversityType?: GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum;

  @Metadata({ data: "json, name=doNotAssociateControlIds" })
  doNotAssociateControlIds?: string[];

  @Metadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;

  @Metadata({ data: "json, name=enableCategoryFilterLevel" })
  enableCategoryFilterLevel?: string;

  @Metadata({ data: "json, name=facetControlIds" })
  facetControlIds?: string[];

  @Metadata({ data: "json, name=filterControlIds" })
  filterControlIds?: string[];

  @Metadata({ data: "json, name=ignoreControlIds" })
  ignoreControlIds?: string[];

  @Metadata({ data: "json, name=modelId" })
  modelId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onewaySynonymsControlIds" })
  onewaySynonymsControlIds?: string[];

  @Metadata({ data: "json, name=personalizationSpec" })
  personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;

  @Metadata({ data: "json, name=priceRerankingLevel" })
  priceRerankingLevel?: string;

  @Metadata({ data: "json, name=redirectControlIds" })
  redirectControlIds?: string[];

  @Metadata({ data: "json, name=replacementControlIds" })
  replacementControlIds?: string[];

  @Metadata({ data: "json, name=solutionTypes" })
  solutionTypes?: GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum[];

  @Metadata({ data: "json, name=twowaySynonymsControlIds" })
  twowaySynonymsControlIds?: string[];
}
