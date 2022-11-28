import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation } from "./googlecloudvisionv1p1beta1productsearchresultsobjectannotation";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsResult } from "./googlecloudvisionv1p1beta1productsearchresultsresult";



// GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult
/** 
 * Information about the products similar to a single product in a query image.
**/
export class GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=objectAnnotations", elemType: GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation })
  objectAnnotations?: GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudVisionV1p1beta1ProductSearchResultsResult })
  results?: GoogleCloudVisionV1p1beta1ProductSearchResultsResult[];
}
