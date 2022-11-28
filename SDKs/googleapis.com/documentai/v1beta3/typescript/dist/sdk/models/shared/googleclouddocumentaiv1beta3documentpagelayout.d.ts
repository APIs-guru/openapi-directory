import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BoundingPoly } from "./googleclouddocumentaiv1beta3boundingpoly";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";
export declare enum GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum {
    OrientationUnspecified = "ORIENTATION_UNSPECIFIED",
    PageUp = "PAGE_UP",
    PageRight = "PAGE_RIGHT",
    PageDown = "PAGE_DOWN",
    PageLeft = "PAGE_LEFT"
}
/**
 * Visual element describing a layout unit on a page.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentPageLayout extends SpeakeasyBase {
    boundingPoly?: GoogleCloudDocumentaiV1beta3BoundingPoly;
    confidence?: number;
    orientation?: GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum;
    textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
}
