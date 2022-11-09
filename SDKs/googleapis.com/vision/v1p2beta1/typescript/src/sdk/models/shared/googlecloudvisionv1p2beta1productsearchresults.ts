import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult } from "./googlecloudvisionv1p2beta1productsearchresultsgroupedresult";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsResult } from "./googlecloudvisionv1p2beta1productsearchresultsresult";


// GoogleCloudVisionV1p2beta1ProductSearchResults
/** 
 * Results for a product search request.
**/
export class GoogleCloudVisionV1p2beta1ProductSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexTime" })
  indexTime?: string;

  @Metadata({ data: "json, name=productGroupedResults", elemType: shared.GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult })
  productGroupedResults?: GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult[];

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudVisionV1p2beta1ProductSearchResultsResult })
  results?: GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
}
