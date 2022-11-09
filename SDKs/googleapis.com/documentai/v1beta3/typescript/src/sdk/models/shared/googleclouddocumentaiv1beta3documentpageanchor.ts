import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef } from "./googleclouddocumentaiv1beta3documentpageanchorpageref";


// GoogleCloudDocumentaiV1beta3DocumentPageAnchor
/** 
 * Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageAnchor extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageRefs", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef })
  pageRefs?: GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef[];
}
