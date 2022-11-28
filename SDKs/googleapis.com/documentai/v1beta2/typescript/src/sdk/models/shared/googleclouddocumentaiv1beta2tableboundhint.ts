import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";



// GoogleCloudDocumentaiV1beta2TableBoundHint
/** 
 * A hint for a table bounding box on the page for table parsing.
**/
export class GoogleCloudDocumentaiV1beta2TableBoundHint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudDocumentaiV1beta2BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;
}
