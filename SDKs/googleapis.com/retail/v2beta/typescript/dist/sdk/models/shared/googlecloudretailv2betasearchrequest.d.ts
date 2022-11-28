import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestBoostSpec } from "./googlecloudretailv2betasearchrequestboostspec";
import { GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2betasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2betaSearchRequestFacetSpec } from "./googlecloudretailv2betasearchrequestfacetspec";
import { GoogleCloudRetailV2betaSearchRequestPersonalizationSpec } from "./googlecloudretailv2betasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2betasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2betasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";
export declare enum GoogleCloudRetailV2betaSearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    ProductSearchOnly = "PRODUCT_SEARCH_ONLY",
    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}
/**
 * Request message for SearchService.Search method.
**/
export declare class GoogleCloudRetailV2betaSearchRequest extends SpeakeasyBase {
    boostSpec?: GoogleCloudRetailV2betaSearchRequestBoostSpec;
    branch?: string;
    canonicalFilter?: string;
    dynamicFacetSpec?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
    facetSpecs?: GoogleCloudRetailV2betaSearchRequestFacetSpec[];
    filter?: string;
    labels?: Map<string, string>;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageSize?: number;
    pageToken?: string;
    personalizationSpec?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
    query?: string;
    queryExpansionSpec?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec;
    searchMode?: GoogleCloudRetailV2betaSearchRequestSearchModeEnum;
    spellCorrectionSpec?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec;
    userInfo?: GoogleCloudRetailV2betaUserInfo;
    variantRollupKeys?: string[];
    visitorId?: string;
}
