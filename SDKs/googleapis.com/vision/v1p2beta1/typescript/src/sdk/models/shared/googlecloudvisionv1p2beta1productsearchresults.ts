import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult } from "./googlecloudvisionv1p2beta1productsearchresultsgroupedresult";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsResult } from "./googlecloudvisionv1p2beta1productsearchresultsresult";



// GoogleCloudVisionV1p2beta1ProductSearchResults
/** 
 * Results for a product search request.
**/
export class GoogleCloudVisionV1p2beta1ProductSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexTime" })
  indexTime?: string;

  @SpeakeasyMetadata({ data: "json, name=productGroupedResults", elemType: GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult })
  productGroupedResults?: GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudVisionV1p2beta1ProductSearchResultsResult })
  results?: GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
}
