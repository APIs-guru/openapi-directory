import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1DocumentStyleFontSize
/** 
 * Font size with unit.
**/
export class GoogleCloudDocumentaiV1DocumentStyleFontSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
