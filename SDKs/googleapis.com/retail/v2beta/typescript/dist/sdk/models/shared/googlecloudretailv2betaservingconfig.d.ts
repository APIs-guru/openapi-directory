import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2betasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2betaSearchRequestPersonalizationSpec } from "./googlecloudretailv2betasearchrequestpersonalizationspec";
export declare enum GoogleCloudRetailV2betaServingConfigDiversityTypeEnum {
    DiversityTypeUnspecified = "DIVERSITY_TYPE_UNSPECIFIED",
    RuleBasedDiversity = "RULE_BASED_DIVERSITY",
    DataDrivenDiversity = "DATA_DRIVEN_DIVERSITY"
}
export declare enum GoogleCloudRetailV2betaServingConfigSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}
/**
 * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
**/
export declare class GoogleCloudRetailV2betaServingConfig extends SpeakeasyBase {
    boostControlIds?: string[];
    displayName?: string;
    diversityLevel?: string;
    diversityType?: GoogleCloudRetailV2betaServingConfigDiversityTypeEnum;
    doNotAssociateControlIds?: string[];
    dynamicFacetSpec?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
    enableCategoryFilterLevel?: string;
    facetControlIds?: string[];
    filterControlIds?: string[];
    ignoreControlIds?: string[];
    modelId?: string;
    name?: string;
    onewaySynonymsControlIds?: string[];
    personalizationSpec?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
    priceRerankingLevel?: string;
    redirectControlIds?: string[];
    replacementControlIds?: string[];
    solutionTypes?: GoogleCloudRetailV2betaServingConfigSolutionTypesEnum[];
    twowaySynonymsControlIds?: string[];
}
