import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchRequestDynamicFacetSpec } from "./googlecloudretailv2searchrequestdynamicfacetspec";
import { GoogleCloudRetailV2SearchRequestPersonalizationSpec } from "./googlecloudretailv2searchrequestpersonalizationspec";
export declare enum GoogleCloudRetailV2ServingConfigDiversityTypeEnum {
    DiversityTypeUnspecified = "DIVERSITY_TYPE_UNSPECIFIED",
    RuleBasedDiversity = "RULE_BASED_DIVERSITY",
    DataDrivenDiversity = "DATA_DRIVEN_DIVERSITY"
}
export declare enum GoogleCloudRetailV2ServingConfigSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}
/**
 * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
**/
export declare class GoogleCloudRetailV2ServingConfig extends SpeakeasyBase {
    boostControlIds?: string[];
    displayName?: string;
    diversityLevel?: string;
    diversityType?: GoogleCloudRetailV2ServingConfigDiversityTypeEnum;
    doNotAssociateControlIds?: string[];
    dynamicFacetSpec?: GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
    enableCategoryFilterLevel?: string;
    facetControlIds?: string[];
    filterControlIds?: string[];
    ignoreControlIds?: string[];
    modelId?: string;
    name?: string;
    onewaySynonymsControlIds?: string[];
    personalizationSpec?: GoogleCloudRetailV2SearchRequestPersonalizationSpec;
    priceRerankingLevel?: string;
    redirectControlIds?: string[];
    replacementControlIds?: string[];
    solutionTypes?: GoogleCloudRetailV2ServingConfigSolutionTypesEnum[];
    twowaySynonymsControlIds?: string[];
}
