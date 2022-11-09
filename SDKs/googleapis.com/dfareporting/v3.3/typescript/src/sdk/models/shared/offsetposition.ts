import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OffsetPosition
/** 
 * Offset Position.
**/
export class OffsetPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=top" })
  top?: number;
}
