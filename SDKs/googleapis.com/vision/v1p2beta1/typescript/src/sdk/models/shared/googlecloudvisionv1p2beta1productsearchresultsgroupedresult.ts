import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation } from "./googlecloudvisionv1p2beta1productsearchresultsobjectannotation";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsResult } from "./googlecloudvisionv1p2beta1productsearchresultsresult";


// GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult
/** 
 * Information about the products similar to a single product in a query image.
**/
export class GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=objectAnnotations", elemType: shared.GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation })
  objectAnnotations?: GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation[];

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudVisionV1p2beta1ProductSearchResultsResult })
  results?: GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
}
