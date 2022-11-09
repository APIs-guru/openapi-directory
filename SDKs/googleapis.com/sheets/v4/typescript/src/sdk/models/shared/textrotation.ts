import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextRotation
/** 
 * The rotation applied to text in a cell.
**/
export class TextRotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=angle" })
  angle?: number;

  @Metadata({ data: "json, name=vertical" })
  vertical?: boolean;
}
