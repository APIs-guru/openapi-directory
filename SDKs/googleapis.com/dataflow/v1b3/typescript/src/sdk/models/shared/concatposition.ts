import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";



// ConcatPosition
/** 
 * A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.
**/
export class ConcatPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: Position;
}
