import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult } from "./googlecloudvisionv1p1beta1productsearchresultsgroupedresult";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsResult } from "./googlecloudvisionv1p1beta1productsearchresultsresult";



// GoogleCloudVisionV1p1beta1ProductSearchResults
/** 
 * Results for a product search request.
**/
export class GoogleCloudVisionV1p1beta1ProductSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexTime" })
  indexTime?: string;

  @SpeakeasyMetadata({ data: "json, name=productGroupedResults", elemType: GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult })
  productGroupedResults?: GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudVisionV1p1beta1ProductSearchResultsResult })
  results?: GoogleCloudVisionV1p1beta1ProductSearchResultsResult[];
}
