import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourcePosition
/** 
 * Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
**/
export class SourcePosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: number;

  @Metadata({ data: "json, name=currentOffset" })
  currentOffset?: number;

  @Metadata({ data: "json, name=endOffset" })
  endOffset?: number;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=line" })
  line?: number;
}
