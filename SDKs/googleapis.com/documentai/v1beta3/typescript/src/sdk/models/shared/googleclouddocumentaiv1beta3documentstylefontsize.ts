import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3DocumentStyleFontSize
/** 
 * Font size with unit.
**/
export class GoogleCloudDocumentaiV1beta3DocumentStyleFontSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
