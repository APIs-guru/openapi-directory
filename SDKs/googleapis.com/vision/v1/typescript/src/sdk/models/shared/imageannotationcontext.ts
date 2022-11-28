import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageAnnotationContext
/** 
 * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
**/
export class ImageAnnotationContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
