import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchResponseFacet } from "./googlecloudretailv2betasearchresponsefacet";
import { GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2betasearchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo } from "./googlecloudretailv2betasearchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2betaSearchResponseSearchResult } from "./googlecloudretailv2betasearchresponsesearchresult";
/**
 * Response message for SearchService.Search method.
**/
export declare class GoogleCloudRetailV2betaSearchResponse extends SpeakeasyBase {
    appliedControls?: string[];
    attributionToken?: string;
    correctedQuery?: string;
    facets?: GoogleCloudRetailV2betaSearchResponseFacet[];
    invalidConditionBoostSpecs?: GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec[];
    nextPageToken?: string;
    queryExpansionInfo?: GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo;
    redirectUri?: string;
    results?: GoogleCloudRetailV2betaSearchResponseSearchResult[];
    totalSize?: number;
}
