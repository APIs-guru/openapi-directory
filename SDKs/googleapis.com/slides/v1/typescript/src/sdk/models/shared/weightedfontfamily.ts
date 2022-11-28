import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WeightedFontFamily
/** 
 * Represents a font family and weight used to style a TextRun.
**/
export class WeightedFontFamily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
