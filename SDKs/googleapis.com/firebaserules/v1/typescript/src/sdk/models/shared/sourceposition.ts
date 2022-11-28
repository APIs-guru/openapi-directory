import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourcePosition
/** 
 * Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
**/
export class SourcePosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: number;

  @SpeakeasyMetadata({ data: "json, name=currentOffset" })
  currentOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=endOffset" })
  endOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: number;
}
