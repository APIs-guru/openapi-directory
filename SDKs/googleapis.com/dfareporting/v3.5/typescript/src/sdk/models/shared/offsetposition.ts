import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OffsetPosition
/** 
 * Offset Position.
**/
export class OffsetPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;
}
