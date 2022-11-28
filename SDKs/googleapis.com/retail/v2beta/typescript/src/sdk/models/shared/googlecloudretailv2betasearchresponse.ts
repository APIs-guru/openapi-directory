import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchResponseFacet } from "./googlecloudretailv2betasearchresponsefacet";
import { GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2betasearchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo } from "./googlecloudretailv2betasearchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2betaSearchResponseSearchResult } from "./googlecloudretailv2betasearchresponsesearchresult";



// GoogleCloudRetailV2betaSearchResponse
/** 
 * Response message for SearchService.Search method.
**/
export class GoogleCloudRetailV2betaSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedControls" })
  appliedControls?: string[];

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=correctedQuery" })
  correctedQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=facets", elemType: GoogleCloudRetailV2betaSearchResponseFacet })
  facets?: GoogleCloudRetailV2betaSearchResponseFacet[];

  @SpeakeasyMetadata({ data: "json, name=invalidConditionBoostSpecs", elemType: GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec })
  invalidConditionBoostSpecs?: GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queryExpansionInfo" })
  queryExpansionInfo?: GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRetailV2betaSearchResponseSearchResult })
  results?: GoogleCloudRetailV2betaSearchResponseSearchResult[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
