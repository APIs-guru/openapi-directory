import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";
export declare enum GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum {
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
export declare class GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef extends SpeakeasyBase {
    boundingPoly?: GoogleCloudDocumentaiV1beta2BoundingPoly;
    confidence?: number;
    layoutId?: string;
    layoutType?: GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum;
    page?: string;
}
