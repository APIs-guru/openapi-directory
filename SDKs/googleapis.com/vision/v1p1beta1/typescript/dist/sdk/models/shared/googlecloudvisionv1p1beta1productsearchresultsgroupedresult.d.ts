import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation } from "./googlecloudvisionv1p1beta1productsearchresultsobjectannotation";
import { GoogleCloudVisionV1p1beta1ProductSearchResultsResult } from "./googlecloudvisionv1p1beta1productsearchresultsresult";
/**
 * Information about the products similar to a single product in a query image.
**/
export declare class GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult extends SpeakeasyBase {
    boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
    objectAnnotations?: GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation[];
    results?: GoogleCloudVisionV1p1beta1ProductSearchResultsResult[];
}
