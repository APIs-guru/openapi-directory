import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";
export declare enum GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum {
    OrientationUnspecified = "ORIENTATION_UNSPECIFIED",
    PageUp = "PAGE_UP",
    PageRight = "PAGE_RIGHT",
    PageDown = "PAGE_DOWN",
    PageLeft = "PAGE_LEFT"
}
/**
 * Visual element describing a layout unit on a page.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentPageLayout extends SpeakeasyBase {
    boundingPoly?: GoogleCloudDocumentaiV1beta2BoundingPoly;
    confidence?: number;
    orientation?: GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum;
    textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
}
