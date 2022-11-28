import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1DocumentPageDimension
/** 
 * Dimension for the page.
**/
export class GoogleCloudDocumentaiV1DocumentPageDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
