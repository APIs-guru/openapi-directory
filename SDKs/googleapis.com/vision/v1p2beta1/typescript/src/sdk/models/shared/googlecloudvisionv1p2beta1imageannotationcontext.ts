import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p2beta1ImageAnnotationContext
/** 
 * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
**/
export class GoogleCloudVisionV1p2beta1ImageAnnotationContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
