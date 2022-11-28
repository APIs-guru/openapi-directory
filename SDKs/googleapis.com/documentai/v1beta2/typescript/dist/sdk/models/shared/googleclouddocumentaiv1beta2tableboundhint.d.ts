import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";
/**
 * A hint for a table bounding box on the page for table parsing.
**/
export declare class GoogleCloudDocumentaiV1beta2TableBoundHint extends SpeakeasyBase {
    boundingBox?: GoogleCloudDocumentaiV1beta2BoundingPoly;
    pageNumber?: number;
}
