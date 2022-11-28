import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1BoundingPoly } from "./googleclouddocumentaiv1boundingpoly";
export declare enum GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum {
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
export declare class GoogleCloudDocumentaiV1DocumentPageAnchorPageRef extends SpeakeasyBase {
    boundingPoly?: GoogleCloudDocumentaiV1BoundingPoly;
    confidence?: number;
    layoutId?: string;
    layoutType?: GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum;
    page?: string;
}
