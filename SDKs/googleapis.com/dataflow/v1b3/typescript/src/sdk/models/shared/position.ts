import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConcatPosition } from "./concatposition";


// Position
/** 
 * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
**/
export class Position extends SpeakeasyBase {
  @Metadata({ data: "json, name=byteOffset" })
  byteOffset?: string;

  @Metadata({ data: "json, name=concatPosition" })
  concatPosition?: ConcatPosition;

  @Metadata({ data: "json, name=end" })
  end?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=recordIndex" })
  recordIndex?: string;

  @Metadata({ data: "json, name=shufflePosition" })
  shufflePosition?: string;
}
