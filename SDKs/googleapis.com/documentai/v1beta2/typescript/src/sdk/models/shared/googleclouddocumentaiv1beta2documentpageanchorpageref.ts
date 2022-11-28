import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";


export enum GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum {
    LayoutTypeUnspecified = "LAYOUT_TYPE_UNSPECIFIED",
    Block = "BLOCK",
    Paragraph = "PARAGRAPH",
    Line = "LINE",
    Token = "TOKEN",
    VisualElement = "VISUAL_ELEMENT",
    Table = "TABLE",
    FormField = "FORM_FIELD"
}


// GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef
/** 
 * Represents a weak reference to a page element within a document.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudDocumentaiV1beta2BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=layoutId" })
  layoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=layoutType" })
  layoutType?: GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: string;
}
