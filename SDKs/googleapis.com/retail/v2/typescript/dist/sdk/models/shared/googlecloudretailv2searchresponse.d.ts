import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchResponseFacet } from "./googlecloudretailv2searchresponsefacet";
import { GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2searchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2SearchResponseQueryExpansionInfo } from "./googlecloudretailv2searchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2SearchResponseSearchResult } from "./googlecloudretailv2searchresponsesearchresult";
/**
 * Response message for SearchService.Search method.
**/
export declare class GoogleCloudRetailV2SearchResponse extends SpeakeasyBase {
    appliedControls?: string[];
    attributionToken?: string;
    correctedQuery?: string;
    facets?: GoogleCloudRetailV2SearchResponseFacet[];
    invalidConditionBoostSpecs?: GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec[];
    nextPageToken?: string;
    queryExpansionInfo?: GoogleCloudRetailV2SearchResponseQueryExpansionInfo;
    redirectUri?: string;
    results?: GoogleCloudRetailV2SearchResponseSearchResult[];
    totalSize?: number;
}
