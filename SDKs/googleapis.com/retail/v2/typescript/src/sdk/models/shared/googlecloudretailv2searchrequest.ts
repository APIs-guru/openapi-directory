import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2SearchRequestBoostSpec } from "./googlecloudretailv2searchrequestboostspec";
import { GoogleCloudRetailV2SearchRequestDynamicFacetSpec } from "./googlecloudretailv2searchrequestdynamicfacetspec";
import { GoogleCloudRetailV2SearchRequestFacetSpec } from "./googlecloudretailv2searchrequestfacetspec";
import { GoogleCloudRetailV2SearchRequestPersonalizationSpec } from "./googlecloudretailv2searchrequestpersonalizationspec";
import { GoogleCloudRetailV2SearchRequestQueryExpansionSpec } from "./googlecloudretailv2searchrequestqueryexpansionspec";
import { GoogleCloudRetailV2SearchRequestSpellCorrectionSpec } from "./googlecloudretailv2searchrequestspellcorrectionspec";
import { GoogleCloudRetailV2UserInfo } from "./googlecloudretailv2userinfo";

export enum GoogleCloudRetailV2SearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED"
,    ProductSearchOnly = "PRODUCT_SEARCH_ONLY"
,    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}


// GoogleCloudRetailV2SearchRequest
/** 
 * Request message for SearchService.Search method.
**/
export class GoogleCloudRetailV2SearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=boostSpec" })
  boostSpec?: GoogleCloudRetailV2SearchRequestBoostSpec;

  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=canonicalFilter" })
  canonicalFilter?: string;

  @Metadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2SearchRequestDynamicFacetSpec;

  @Metadata({ data: "json, name=facetSpecs", elemType: shared.GoogleCloudRetailV2SearchRequestFacetSpec })
  facetSpecs?: GoogleCloudRetailV2SearchRequestFacetSpec[];

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
  personalizationSpec?: GoogleCloudRetailV2SearchRequestPersonalizationSpec;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=queryExpansionSpec" })
  queryExpansionSpec?: GoogleCloudRetailV2SearchRequestQueryExpansionSpec;

  @Metadata({ data: "json, name=searchMode" })
  searchMode?: GoogleCloudRetailV2SearchRequestSearchModeEnum;

  @Metadata({ data: "json, name=spellCorrectionSpec" })
  spellCorrectionSpec?: GoogleCloudRetailV2SearchRequestSpellCorrectionSpec;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2UserInfo;

  @Metadata({ data: "json, name=variantRollupKeys" })
  variantRollupKeys?: string[];

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
