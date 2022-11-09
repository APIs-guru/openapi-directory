import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaSearchResponseFacet } from "./googlecloudretailv2alphasearchresponsefacet";
import { GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo } from "./googlecloudretailv2alphasearchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2alphaSearchResponseSearchResult } from "./googlecloudretailv2alphasearchresponsesearchresult";


// GoogleCloudRetailV2alphaSearchResponse
/** 
 * Response message for SearchService.Search method.
**/
export class GoogleCloudRetailV2alphaSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedControls" })
  appliedControls?: string[];

  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=correctedQuery" })
  correctedQuery?: string;

  @Metadata({ data: "json, name=facets", elemType: shared.GoogleCloudRetailV2alphaSearchResponseFacet })
  facets?: GoogleCloudRetailV2alphaSearchResponseFacet[];

  @Metadata({ data: "json, name=invalidConditionBoostSpecs", elemType: shared.GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec })
  invalidConditionBoostSpecs?: GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=queryExpansionInfo" })
  queryExpansionInfo?: GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo;

  @Metadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudRetailV2alphaSearchResponseSearchResult })
  results?: GoogleCloudRetailV2alphaSearchResponseSearchResult[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
