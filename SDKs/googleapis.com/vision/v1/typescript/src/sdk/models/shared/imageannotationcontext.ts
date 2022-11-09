import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageAnnotationContext
/** 
 * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
**/
export class ImageAnnotationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
