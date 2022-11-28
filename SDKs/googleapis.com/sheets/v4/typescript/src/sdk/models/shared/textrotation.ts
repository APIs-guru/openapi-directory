import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextRotation
/** 
 * The rotation applied to text in a cell.
**/
export class TextRotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=angle" })
  angle?: number;

  @SpeakeasyMetadata({ data: "json, name=vertical" })
  vertical?: boolean;
}
