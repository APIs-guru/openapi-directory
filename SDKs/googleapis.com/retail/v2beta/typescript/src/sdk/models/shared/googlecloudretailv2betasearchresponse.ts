import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaSearchResponseFacet } from "./googlecloudretailv2betasearchresponsefacet";
import { GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2betasearchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo } from "./googlecloudretailv2betasearchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2betaSearchResponseSearchResult } from "./googlecloudretailv2betasearchresponsesearchresult";


// GoogleCloudRetailV2betaSearchResponse
/** 
 * Response message for SearchService.Search method.
**/
export class GoogleCloudRetailV2betaSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedControls" })
  appliedControls?: string[];

  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=correctedQuery" })
  correctedQuery?: string;

  @Metadata({ data: "json, name=facets", elemType: shared.GoogleCloudRetailV2betaSearchResponseFacet })
  facets?: GoogleCloudRetailV2betaSearchResponseFacet[];

  @Metadata({ data: "json, name=invalidConditionBoostSpecs", elemType: shared.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec })
  invalidConditionBoostSpecs?: GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=queryExpansionInfo" })
  queryExpansionInfo?: GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo;

  @Metadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudRetailV2betaSearchResponseSearchResult })
  results?: GoogleCloudRetailV2betaSearchResponseSearchResult[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
