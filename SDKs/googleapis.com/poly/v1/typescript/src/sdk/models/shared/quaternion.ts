import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Quaternion
/** 
 * A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0.
**/
export class Quaternion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=w" })
  w?: number;

  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;

  @SpeakeasyMetadata({ data: "json, name=z" })
  z?: number;
}
