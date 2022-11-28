import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchRequestBoostSpec } from "./googlecloudretailv2searchrequestboostspec";
import { GoogleCloudRetailV2SearchRequestDynamicFacetSpec } from "./googlecloudretailv2searchrequestdynamicfacetspec";
import { GoogleCloudRetailV2SearchRequestFacetSpec } from "./googlecloudretailv2searchrequestfacetspec";
import { GoogleCloudRetailV2SearchRequestPersonalizationSpec } from "./googlecloudretailv2searchrequestpersonalizationspec";
import { GoogleCloudRetailV2SearchRequestQueryExpansionSpec } from "./googlecloudretailv2searchrequestqueryexpansionspec";
import { GoogleCloudRetailV2SearchRequestSpellCorrectionSpec } from "./googlecloudretailv2searchrequestspellcorrectionspec";
import { GoogleCloudRetailV2UserInfo } from "./googlecloudretailv2userinfo";
export declare enum GoogleCloudRetailV2SearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    ProductSearchOnly = "PRODUCT_SEARCH_ONLY",
    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}
/**
 * Request message for SearchService.Search method.
**/
export declare class GoogleCloudRetailV2SearchRequest extends SpeakeasyBase {
    boostSpec?: GoogleCloudRetailV2SearchRequestBoostSpec;
    branch?: string;
    canonicalFilter?: string;
    dynamicFacetSpec?: GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
    facetSpecs?: GoogleCloudRetailV2SearchRequestFacetSpec[];
    filter?: string;
    labels?: Map<string, string>;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageSize?: number;
    pageToken?: string;
    personalizationSpec?: GoogleCloudRetailV2SearchRequestPersonalizationSpec;
    query?: string;
    queryExpansionSpec?: GoogleCloudRetailV2SearchRequestQueryExpansionSpec;
    searchMode?: GoogleCloudRetailV2SearchRequestSearchModeEnum;
    spellCorrectionSpec?: GoogleCloudRetailV2SearchRequestSpellCorrectionSpec;
    userInfo?: GoogleCloudRetailV2UserInfo;
    variantRollupKeys?: string[];
    visitorId?: string;
}
