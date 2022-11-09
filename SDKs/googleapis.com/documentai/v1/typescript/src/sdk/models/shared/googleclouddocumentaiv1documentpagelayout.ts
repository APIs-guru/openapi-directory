import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1BoundingPoly } from "./googleclouddocumentaiv1boundingpoly";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";

export enum GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum {
    OrientationUnspecified = "ORIENTATION_UNSPECIFIED"
,    PageUp = "PAGE_UP"
,    PageRight = "PAGE_RIGHT"
,    PageDown = "PAGE_DOWN"
,    PageLeft = "PAGE_LEFT"
}


// GoogleCloudDocumentaiV1DocumentPageLayout
/** 
 * Visual element describing a layout unit on a page.
**/
export class GoogleCloudDocumentaiV1DocumentPageLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudDocumentaiV1BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=orientation" })
  orientation?: GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum;

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
}
