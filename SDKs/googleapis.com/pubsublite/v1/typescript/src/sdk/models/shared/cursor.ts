import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cursor
/** 
 * A cursor that describes the position of a message within a topic partition.
**/
export class Cursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: string;
}
