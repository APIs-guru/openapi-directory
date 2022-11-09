import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2SearchResponseFacet } from "./googlecloudretailv2searchresponsefacet";
import { GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2searchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2SearchResponseQueryExpansionInfo } from "./googlecloudretailv2searchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2SearchResponseSearchResult } from "./googlecloudretailv2searchresponsesearchresult";


// GoogleCloudRetailV2SearchResponse
/** 
 * Response message for SearchService.Search method.
**/
export class GoogleCloudRetailV2SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedControls" })
  appliedControls?: string[];

  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=correctedQuery" })
  correctedQuery?: string;

  @Metadata({ data: "json, name=facets", elemType: shared.GoogleCloudRetailV2SearchResponseFacet })
  facets?: GoogleCloudRetailV2SearchResponseFacet[];

  @Metadata({ data: "json, name=invalidConditionBoostSpecs", elemType: shared.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec })
  invalidConditionBoostSpecs?: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=queryExpansionInfo" })
  queryExpansionInfo?: GoogleCloudRetailV2SearchResponseQueryExpansionInfo;

  @Metadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudRetailV2SearchResponseSearchResult })
  results?: GoogleCloudRetailV2SearchResponseSearchResult[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
