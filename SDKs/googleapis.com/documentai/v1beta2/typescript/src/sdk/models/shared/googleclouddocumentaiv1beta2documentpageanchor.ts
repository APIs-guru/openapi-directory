import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef } from "./googleclouddocumentaiv1beta2documentpageanchorpageref";



// GoogleCloudDocumentaiV1beta2DocumentPageAnchor
/** 
 * Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageAnchor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageRefs", elemType: GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef })
  pageRefs?: GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef[];
}
