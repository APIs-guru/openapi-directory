import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BoundingPoly } from "./googleclouddocumentaiv1beta3boundingpoly";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";


export enum GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum {
    OrientationUnspecified = "ORIENTATION_UNSPECIFIED",
    PageUp = "PAGE_UP",
    PageRight = "PAGE_RIGHT",
    PageDown = "PAGE_DOWN",
    PageLeft = "PAGE_LEFT"
}


// GoogleCloudDocumentaiV1beta3DocumentPageLayout
/** 
 * Visual element describing a layout unit on a page.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudDocumentaiV1beta3BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
}
