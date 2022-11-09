import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult } from "./googlecloudvisionv1p1beta1productsearchresultsgroupedresult";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsResult } from "./googlecloudvisionv1p1beta1productsearchresultsresult";


// GoogleCloudVisionV1p1beta1ProductSearchResults
/** 
 * Results for a product search request.
**/
export class GoogleCloudVisionV1p1beta1ProductSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexTime" })
  indexTime?: string;

  @Metadata({ data: "json, name=productGroupedResults", elemType: shared.GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult })
  productGroupedResults?: GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult[];

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudVisionV1p1beta1ProductSearchResultsResult })
  results?: GoogleCloudVisionV1p1beta1ProductSearchResultsResult[];
}
