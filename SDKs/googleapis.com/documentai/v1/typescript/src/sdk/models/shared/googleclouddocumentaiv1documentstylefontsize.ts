import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1DocumentStyleFontSize
/** 
 * Font size with unit.
**/
export class GoogleCloudDocumentaiV1DocumentStyleFontSize extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
