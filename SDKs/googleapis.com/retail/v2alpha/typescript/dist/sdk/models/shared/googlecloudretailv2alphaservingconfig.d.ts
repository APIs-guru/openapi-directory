import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2alphasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec } from "./googlecloudretailv2alphasearchrequestpersonalizationspec";
export declare enum GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum {
    DiversityTypeUnspecified = "DIVERSITY_TYPE_UNSPECIFIED",
    RuleBasedDiversity = "RULE_BASED_DIVERSITY",
    DataDrivenDiversity = "DATA_DRIVEN_DIVERSITY"
}
export declare enum GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}
/**
 * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
**/
export declare class GoogleCloudRetailV2alphaServingConfig extends SpeakeasyBase {
    boostControlIds?: string[];
    displayName?: string;
    diversityLevel?: string;
    diversityType?: GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum;
    doNotAssociateControlIds?: string[];
    dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
    enableCategoryFilterLevel?: string;
    facetControlIds?: string[];
    filterControlIds?: string[];
    ignoreControlIds?: string[];
    modelId?: string;
    name?: string;
    onewaySynonymsControlIds?: string[];
    personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
    priceRerankingLevel?: string;
    redirectControlIds?: string[];
    replacementControlIds?: string[];
    solutionTypes?: GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum[];
    twowaySynonymsControlIds?: string[];
}
