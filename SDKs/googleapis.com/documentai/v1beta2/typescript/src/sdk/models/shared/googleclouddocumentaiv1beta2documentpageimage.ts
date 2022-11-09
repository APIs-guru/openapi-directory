import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2DocumentPageImage
/** 
 * Rendered image contents for this page.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
