import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1DocumentPageMatrix
/** 
 * Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
**/
export class GoogleCloudDocumentaiV1DocumentPageMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=cols" })
  cols?: number;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=rows" })
  rows?: number;

  @Metadata({ data: "json, name=type" })
  type?: number;
}
