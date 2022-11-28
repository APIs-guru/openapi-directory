import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchResponseFacet } from "./googlecloudretailv2alphasearchresponsefacet";
import { GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec } from "./googlecloudretailv2alphasearchrequestboostspecconditionboostspec";
import { GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo } from "./googlecloudretailv2alphasearchresponsequeryexpansioninfo";
import { GoogleCloudRetailV2alphaSearchResponseSearchResult } from "./googlecloudretailv2alphasearchresponsesearchresult";
/**
 * Response message for SearchService.Search method.
**/
export declare class GoogleCloudRetailV2alphaSearchResponse extends SpeakeasyBase {
    appliedControls?: string[];
    attributionToken?: string;
    correctedQuery?: string;
    facets?: GoogleCloudRetailV2alphaSearchResponseFacet[];
    invalidConditionBoostSpecs?: GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec[];
    nextPageToken?: string;
    queryExpansionInfo?: GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo;
    redirectUri?: string;
    results?: GoogleCloudRetailV2alphaSearchResponseSearchResult[];
    totalSize?: number;
}
