import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2DocumentPageDimension
/** 
 * Dimension for the page.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
