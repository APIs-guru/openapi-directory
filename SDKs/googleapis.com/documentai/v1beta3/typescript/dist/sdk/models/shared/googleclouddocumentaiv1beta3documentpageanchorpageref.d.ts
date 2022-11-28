import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BoundingPoly } from "./googleclouddocumentaiv1beta3boundingpoly";
export declare enum GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum {
    LayoutTypeUnspecified = "LAYOUT_TYPE_UNSPECIFIED",
    Block = "BLOCK",
    Paragraph = "PARAGRAPH",
    Line = "LINE",
    Token = "TOKEN",
    VisualElement = "VISUAL_ELEMENT",
    Table = "TABLE",
    FormField = "FORM_FIELD"
}
/**
 * Represents a weak reference to a page element within a document.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef extends SpeakeasyBase {
    boundingPoly?: GoogleCloudDocumentaiV1beta3BoundingPoly;
    confidence?: number;
    layoutId?: string;
    layoutType?: GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum;
    page?: string;
}
