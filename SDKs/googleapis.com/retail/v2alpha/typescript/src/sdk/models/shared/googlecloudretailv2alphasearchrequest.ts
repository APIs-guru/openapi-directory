import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspec";
import { GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2alphasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec } from "./googlecloudretailv2alphasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2alphasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2alphasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2alphaUserInfo } from "./googlecloudretailv2alphauserinfo";


export enum GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum {
    RelevanceThresholdUnspecified = "RELEVANCE_THRESHOLD_UNSPECIFIED",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Lowest = "LOWEST"
}

export enum GoogleCloudRetailV2alphaSearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    ProductSearchOnly = "PRODUCT_SEARCH_ONLY",
    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}


// GoogleCloudRetailV2alphaSearchRequest
/** 
 * Request message for SearchService.Search method.
**/
export class GoogleCloudRetailV2alphaSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boostSpec" })
  boostSpec?: GoogleCloudRetailV2alphaSearchRequestBoostSpec;

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalFilter" })
  canonicalFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;

  @SpeakeasyMetadata({ data: "json, name=facetSpecs", elemType: GoogleCloudRetailV2alphaSearchRequestFacetSpec })
  facetSpecs?: GoogleCloudRetailV2alphaSearchRequestFacetSpec[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageCategories" })
  pageCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=personalizationSpec" })
  personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=queryExpansionSpec" })
  queryExpansionSpec?: GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec;

  @SpeakeasyMetadata({ data: "json, name=relevanceThreshold" })
  relevanceThreshold?: GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum;

  @SpeakeasyMetadata({ data: "json, name=searchMode" })
  searchMode?: GoogleCloudRetailV2alphaSearchRequestSearchModeEnum;

  @SpeakeasyMetadata({ data: "json, name=spellCorrectionSpec" })
  spellCorrectionSpec?: GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2alphaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=variantRollupKeys" })
  variantRollupKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
