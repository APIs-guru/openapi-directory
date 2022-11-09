import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RgbColor
/** 
 * An RGB color.
**/
export class RgbColor extends SpeakeasyBase {
  @Metadata({ data: "json, name=blue" })
  blue?: number;

  @Metadata({ data: "json, name=green" })
  green?: number;

  @Metadata({ data: "json, name=red" })
  red?: number;
}
