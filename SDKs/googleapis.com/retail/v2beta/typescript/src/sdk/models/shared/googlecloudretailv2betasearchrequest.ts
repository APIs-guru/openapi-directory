import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestBoostSpec } from "./googlecloudretailv2betasearchrequestboostspec";
import { GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2betasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2betaSearchRequestFacetSpec } from "./googlecloudretailv2betasearchrequestfacetspec";
import { GoogleCloudRetailV2betaSearchRequestPersonalizationSpec } from "./googlecloudretailv2betasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2betasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2betasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";


export enum GoogleCloudRetailV2betaSearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    ProductSearchOnly = "PRODUCT_SEARCH_ONLY",
    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}


// GoogleCloudRetailV2betaSearchRequest
/** 
 * Request message for SearchService.Search method.
**/
export class GoogleCloudRetailV2betaSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boostSpec" })
  boostSpec?: GoogleCloudRetailV2betaSearchRequestBoostSpec;

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalFilter" })
  canonicalFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;

  @SpeakeasyMetadata({ data: "json, name=facetSpecs", elemType: GoogleCloudRetailV2betaSearchRequestFacetSpec })
  facetSpecs?: GoogleCloudRetailV2betaSearchRequestFacetSpec[];

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
  personalizationSpec?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=queryExpansionSpec" })
  queryExpansionSpec?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec;

  @SpeakeasyMetadata({ data: "json, name=searchMode" })
  searchMode?: GoogleCloudRetailV2betaSearchRequestSearchModeEnum;

  @SpeakeasyMetadata({ data: "json, name=spellCorrectionSpec" })
  spellCorrectionSpec?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=variantRollupKeys" })
  variantRollupKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
