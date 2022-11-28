import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult } from "./googlecloudvisionv1p2beta1productsearchresultsgroupedresult";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsResult } from "./googlecloudvisionv1p2beta1productsearchresultsresult";
/**
 * Results for a product search request.
**/
export declare class GoogleCloudVisionV1p2beta1ProductSearchResults extends SpeakeasyBase {
    indexTime?: string;
    productGroupedResults?: GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult[];
    results?: GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
}
