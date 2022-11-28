import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RgbColor
/** 
 * An RGB color.
**/
export class RgbColor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blue" })
  blue?: number;

  @SpeakeasyMetadata({ data: "json, name=green" })
  green?: number;

  @SpeakeasyMetadata({ data: "json, name=red" })
  red?: number;
}
