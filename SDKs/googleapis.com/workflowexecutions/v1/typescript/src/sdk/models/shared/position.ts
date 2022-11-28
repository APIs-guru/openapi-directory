import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Position
/** 
 * Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
**/
export class Position extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: string;
}
