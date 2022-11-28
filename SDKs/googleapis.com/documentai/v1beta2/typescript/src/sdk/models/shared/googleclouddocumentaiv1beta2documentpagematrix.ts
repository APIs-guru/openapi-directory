import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2DocumentPageMatrix
/** 
 * Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cols" })
  cols?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}
