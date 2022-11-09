import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentPageAnchorPageRef } from "./googleclouddocumentaiv1documentpageanchorpageref";


// GoogleCloudDocumentaiV1DocumentPageAnchor
/** 
 * Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
**/
export class GoogleCloudDocumentaiV1DocumentPageAnchor extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageRefs", elemType: shared.GoogleCloudDocumentaiV1DocumentPageAnchorPageRef })
  pageRefs?: GoogleCloudDocumentaiV1DocumentPageAnchorPageRef[];
}
