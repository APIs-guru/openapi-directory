import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspec";
import { GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2alphasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec } from "./googlecloudretailv2alphasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2alphasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2alphasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2alphaUserInfo } from "./googlecloudretailv2alphauserinfo";
export declare enum GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum {
    RelevanceThresholdUnspecified = "RELEVANCE_THRESHOLD_UNSPECIFIED",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Lowest = "LOWEST"
}
export declare enum GoogleCloudRetailV2alphaSearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    ProductSearchOnly = "PRODUCT_SEARCH_ONLY",
    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}
/**
 * Request message for SearchService.Search method.
**/
export declare class GoogleCloudRetailV2alphaSearchRequest extends SpeakeasyBase {
    boostSpec?: GoogleCloudRetailV2alphaSearchRequestBoostSpec;
    branch?: string;
    canonicalFilter?: string;
    dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
    facetSpecs?: GoogleCloudRetailV2alphaSearchRequestFacetSpec[];
    filter?: string;
    labels?: Map<string, string>;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageSize?: number;
    pageToken?: string;
    personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
    query?: string;
    queryExpansionSpec?: GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec;
    relevanceThreshold?: GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum;
    searchMode?: GoogleCloudRetailV2alphaSearchRequestSearchModeEnum;
    spellCorrectionSpec?: GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec;
    userInfo?: GoogleCloudRetailV2alphaUserInfo;
    variantRollupKeys?: string[];
    visitorId?: string;
}
