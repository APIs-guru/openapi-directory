import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1BoundingPoly } from "./googleclouddocumentaiv1boundingpoly";


export enum GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum {
    LayoutTypeUnspecified = "LAYOUT_TYPE_UNSPECIFIED",
    Block = "BLOCK",
    Paragraph = "PARAGRAPH",
    Line = "LINE",
    Token = "TOKEN",
    VisualElement = "VISUAL_ELEMENT",
    Table = "TABLE",
    FormField = "FORM_FIELD"
}


// GoogleCloudDocumentaiV1DocumentPageAnchorPageRef
/** 
 * Represents a weak reference to a page element within a document.
**/
export class GoogleCloudDocumentaiV1DocumentPageAnchorPageRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudDocumentaiV1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=layoutId" })
  layoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=layoutType" })
  layoutType?: GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: string;
}
