import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WeightedFontFamily
/** 
 * Represents a font family and weight used to style a TextRun.
**/
export class WeightedFontFamily extends SpeakeasyBase {
  @Metadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
