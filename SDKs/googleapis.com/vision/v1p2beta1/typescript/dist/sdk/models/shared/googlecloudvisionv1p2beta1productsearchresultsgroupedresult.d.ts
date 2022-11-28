import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation } from "./googlecloudvisionv1p2beta1productsearchresultsobjectannotation";
import { GoogleCloudVisionV1p2beta1ProductSearchResultsResult } from "./googlecloudvisionv1p2beta1productsearchresultsresult";
/**
 * Information about the products similar to a single product in a query image.
**/
export declare class GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult extends SpeakeasyBase {
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    objectAnnotations?: GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation[];
    results?: GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
}
