import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaSearchRequestBoostSpec } from "./googlecloudretailv2betasearchrequestboostspec";
import { GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2betasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2betaSearchRequestFacetSpec } from "./googlecloudretailv2betasearchrequestfacetspec";
import { GoogleCloudRetailV2betaSearchRequestPersonalizationSpec } from "./googlecloudretailv2betasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2betasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2betasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";

export enum GoogleCloudRetailV2betaSearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED"
,    ProductSearchOnly = "PRODUCT_SEARCH_ONLY"
,    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}


// GoogleCloudRetailV2betaSearchRequest
/** 
 * Request message for SearchService.Search method.
**/
export class GoogleCloudRetailV2betaSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=boostSpec" })
  boostSpec?: GoogleCloudRetailV2betaSearchRequestBoostSpec;

  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=canonicalFilter" })
  canonicalFilter?: string;

  @Metadata({ data: "json, name=dynamicFacetSpec" })
  dynamicFacetSpec?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;

  @Metadata({ data: "json, name=facetSpecs", elemType: shared.GoogleCloudRetailV2betaSearchRequestFacetSpec })
  facetSpecs?: GoogleCloudRetailV2betaSearchRequestFacetSpec[];

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
  personalizationSpec?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=queryExpansionSpec" })
  queryExpansionSpec?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec;

  @Metadata({ data: "json, name=searchMode" })
  searchMode?: GoogleCloudRetailV2betaSearchRequestSearchModeEnum;

  @Metadata({ data: "json, name=spellCorrectionSpec" })
  spellCorrectionSpec?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2betaUserInfo;

  @Metadata({ data: "json, name=variantRollupKeys" })
  variantRollupKeys?: string[];

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
