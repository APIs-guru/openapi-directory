import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2BoundingBox
/** 
 * Bounding box encompassing detected text within an image.
**/
export class GooglePrivacyDlpV2BoundingBox extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=top" })
  top?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
