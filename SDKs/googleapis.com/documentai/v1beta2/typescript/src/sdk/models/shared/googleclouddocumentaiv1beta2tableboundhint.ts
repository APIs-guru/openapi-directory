import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";


// GoogleCloudDocumentaiV1beta2TableBoundHint
/** 
 * A hint for a table bounding box on the page for table parsing.
**/
export class GoogleCloudDocumentaiV1beta2TableBoundHint extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudDocumentaiV1beta2BoundingPoly;

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber?: number;
}
