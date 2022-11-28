import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConcatPosition } from "./concatposition";



// Position
/** 
 * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
**/
export class Position extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byteOffset" })
  byteOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=concatPosition" })
  concatPosition?: ConcatPosition;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=recordIndex" })
  recordIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=shufflePosition" })
  shufflePosition?: string;
}
