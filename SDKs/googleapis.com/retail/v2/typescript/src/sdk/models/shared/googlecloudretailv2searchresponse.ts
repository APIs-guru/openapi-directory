import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchResponseFacet } from "./googlecloudretailv2searchresponsefacet";
import { GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2searchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2SearchResponseQueryExpansionInfo } from "./googlecloudretailv2searchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2SearchResponseSearchResult } from "./googlecloudretailv2searchresponsesearchresult";



// GoogleCloudRetailV2SearchResponse
/** 
 * Response message for SearchService.Search method.
**/
export class GoogleCloudRetailV2SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedControls" })
  appliedControls?: string[];

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=correctedQuery" })
  correctedQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=facets", elemType: GoogleCloudRetailV2SearchResponseFacet })
  facets?: GoogleCloudRetailV2SearchResponseFacet[];

  @SpeakeasyMetadata({ data: "json, name=invalidConditionBoostSpecs", elemType: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec })
  invalidConditionBoostSpecs?: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queryExpansionInfo" })
  queryExpansionInfo?: GoogleCloudRetailV2SearchResponseQueryExpansionInfo;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRetailV2SearchResponseSearchResult })
  results?: GoogleCloudRetailV2SearchResponseSearchResult[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
