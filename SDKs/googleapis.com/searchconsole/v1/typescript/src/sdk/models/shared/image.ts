import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Image
/** 
 * Describe image data.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
