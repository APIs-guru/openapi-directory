import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult } from "./googlecloudvisionv1p1beta1productsearchresultsgroupedresult";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsResult } from "./googlecloudvisionv1p1beta1productsearchresultsresult";
/**
 * Results for a product search request.
**/
export declare class GoogleCloudVisionV1p1beta1ProductSearchResults extends SpeakeasyBase {
    indexTime?: string;
    productGroupedResults?: GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult[];
    results?: GoogleCloudVisionV1p1beta1ProductSearchResultsResult[];
}
