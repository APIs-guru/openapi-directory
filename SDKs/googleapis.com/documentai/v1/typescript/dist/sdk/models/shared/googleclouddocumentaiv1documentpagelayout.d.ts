import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1BoundingPoly } from "./googleclouddocumentaiv1boundingpoly";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
export declare enum GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum {
    OrientationUnspecified = "ORIENTATION_UNSPECIFIED",
    PageUp = "PAGE_UP",
    PageRight = "PAGE_RIGHT",
    PageDown = "PAGE_DOWN",
    PageLeft = "PAGE_LEFT"
}
/**
 * Visual element describing a layout unit on a page.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageLayout extends SpeakeasyBase {
    boundingPoly?: GoogleCloudDocumentaiV1BoundingPoly;
    confidence?: number;
    orientation?: GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum;
    textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
}
