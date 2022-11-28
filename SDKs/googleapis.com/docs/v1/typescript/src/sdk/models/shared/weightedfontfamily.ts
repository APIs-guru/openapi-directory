import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WeightedFontFamily
/** 
 * Represents a font family and weight of text.
**/
export class WeightedFontFamily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
