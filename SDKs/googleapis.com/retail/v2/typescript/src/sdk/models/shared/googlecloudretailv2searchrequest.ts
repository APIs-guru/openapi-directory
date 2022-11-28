import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchRequestBoostSpec } from "./googlecloudretailv2searchrequestboostspec";
import { GoogleCloudRetailV2SearchRequestDynamicFacetSpec } from "./googlecloudretailv2searchrequestdynamicfacetspec";
import { GoogleCloudRetailV2SearchRequestFacetSpec } from "./googlecloudretailv2searchrequestfacetspec";
import { GoogleCloudRetailV2SearchRequestPersonalizationSpec } from "./googlecloudretailv2searchrequestpersonalizationspec";
import { GoogleCloudRetailV2SearchRequestQueryExpansionSpec } from "./googlecloudretailv2searchrequestqueryexpansionspec";
import { GoogleCloudRetailV2SearchRequestSpellCorrectionSpec } from "./googlecloudretailv2searchrequestspellcorrectionspec";
import { GoogleCloudRetailV2UserInfo } from "./googlecloudretailv2userinfo";


export enum GoogleCloudRetailV2SearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    ProductSearchOnly = "PRODUCT_SEARCH_ONLY",
    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}


// GoogleCloudRetailV2SearchRequest
/** 
 * Request message for SearchService.Search method.
**/
export class GoogleCloudRetailV2SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boostSpec" })
  boostSpec?: GoogleCloudRetailV2SearchRequestBoostSpec;

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalFilter" })
  canonicalFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2SearchRequestDynamicFacetSpec;

  @SpeakeasyMetadata({ data: "json, name=facetSpecs", elemType: GoogleCloudRetailV2SearchRequestFacetSpec })
  facetSpecs?: GoogleCloudRetailV2SearchRequestFacetSpec[];

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
  personalizationSpec?: GoogleCloudRetailV2SearchRequestPersonalizationSpec;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=queryExpansionSpec" })
  queryExpansionSpec?: GoogleCloudRetailV2SearchRequestQueryExpansionSpec;

  @SpeakeasyMetadata({ data: "json, name=searchMode" })
  searchMode?: GoogleCloudRetailV2SearchRequestSearchModeEnum;

  @SpeakeasyMetadata({ data: "json, name=spellCorrectionSpec" })
  spellCorrectionSpec?: GoogleCloudRetailV2SearchRequestSpellCorrectionSpec;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=variantRollupKeys" })
  variantRollupKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
