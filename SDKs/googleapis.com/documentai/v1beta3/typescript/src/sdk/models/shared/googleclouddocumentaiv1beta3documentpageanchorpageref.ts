import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3BoundingPoly } from "./googleclouddocumentaiv1beta3boundingpoly";

export enum GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum {
    LayoutTypeUnspecified = "LAYOUT_TYPE_UNSPECIFIED"
,    Block = "BLOCK"
,    Paragraph = "PARAGRAPH"
,    Line = "LINE"
,    Token = "TOKEN"
,    VisualElement = "VISUAL_ELEMENT"
,    Table = "TABLE"
,    FormField = "FORM_FIELD"
}


// GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef
/** 
 * Represents a weak reference to a page element within a document.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudDocumentaiV1beta3BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=layoutId" })
  layoutId?: string;

  @Metadata({ data: "json, name=layoutType" })
  layoutType?: GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum;

  @Metadata({ data: "json, name=page" })
  page?: string;
}
