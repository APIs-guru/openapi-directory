import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Position
/** 
 * Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
**/
export class Position extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=length" })
  length?: string;

  @Metadata({ data: "json, name=line" })
  line?: string;
}
