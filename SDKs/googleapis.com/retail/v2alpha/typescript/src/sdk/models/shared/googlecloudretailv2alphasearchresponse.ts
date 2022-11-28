import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchResponseFacet } from "./googlecloudretailv2alphasearchresponsefacet";
import { GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo } from "./googlecloudretailv2alphasearchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2alphaSearchResponseSearchResult } from "./googlecloudretailv2alphasearchresponsesearchresult";



// GoogleCloudRetailV2alphaSearchResponse
/** 
 * Response message for SearchService.Search method.
**/
export class GoogleCloudRetailV2alphaSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedControls" })
  appliedControls?: string[];

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=correctedQuery" })
  correctedQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=facets", elemType: GoogleCloudRetailV2alphaSearchResponseFacet })
  facets?: GoogleCloudRetailV2alphaSearchResponseFacet[];

  @SpeakeasyMetadata({ data: "json, name=invalidConditionBoostSpecs", elemType: GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec })
  invalidConditionBoostSpecs?: GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queryExpansionInfo" })
  queryExpansionInfo?: GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRetailV2alphaSearchResponseSearchResult })
  results?: GoogleCloudRetailV2alphaSearchResponseSearchResult[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
