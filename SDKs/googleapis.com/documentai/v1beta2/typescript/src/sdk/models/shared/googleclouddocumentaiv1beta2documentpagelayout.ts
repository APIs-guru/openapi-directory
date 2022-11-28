import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";


export enum GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum {
    OrientationUnspecified = "ORIENTATION_UNSPECIFIED",
    PageUp = "PAGE_UP",
    PageRight = "PAGE_RIGHT",
    PageDown = "PAGE_DOWN",
    PageLeft = "PAGE_LEFT"
}


// GoogleCloudDocumentaiV1beta2DocumentPageLayout
/** 
 * Visual element describing a layout unit on a page.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudDocumentaiV1beta2BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: GoogleCloudDocumentaiV1beta2DocumentPageLayoutOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
}
