import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaSearchRequestBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspec";
import { GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2alphasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec } from "./googlecloudretailv2alphasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2alphasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2alphasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2alphaUserInfo } from "./googlecloudretailv2alphauserinfo";

export enum GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum {
    RelevanceThresholdUnspecified = "RELEVANCE_THRESHOLD_UNSPECIFIED"
,    High = "HIGH"
,    Medium = "MEDIUM"
,    Low = "LOW"
,    Lowest = "LOWEST"
}

export enum GoogleCloudRetailV2alphaSearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED"
,    ProductSearchOnly = "PRODUCT_SEARCH_ONLY"
,    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}


// GoogleCloudRetailV2alphaSearchRequest
/** 
 * Request message for SearchService.Search method.
**/
export class GoogleCloudRetailV2alphaSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=boostSpec" })
  boostSpec?: GoogleCloudRetailV2alphaSearchRequestBoostSpec;

  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=canonicalFilter" })
  canonicalFilter?: string;

  @Metadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;

  @Metadata({ data: "json, name=facetSpecs", elemType: shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec })
  facetSpecs?: GoogleCloudRetailV2alphaSearchRequestFacetSpec[];

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "json, name=pageCategories" })
  pageCategories?: string[];

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=personalizationSpec" })
  personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=queryExpansionSpec" })
  queryExpansionSpec?: GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec;

  @Metadata({ data: "json, name=relevanceThreshold" })
  relevanceThreshold?: GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum;

  @Metadata({ data: "json, name=searchMode" })
  searchMode?: GoogleCloudRetailV2alphaSearchRequestSearchModeEnum;

  @Metadata({ data: "json, name=spellCorrectionSpec" })
  spellCorrectionSpec?: GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2alphaUserInfo;

  @Metadata({ data: "json, name=variantRollupKeys" })
  variantRollupKeys?: string[];

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
