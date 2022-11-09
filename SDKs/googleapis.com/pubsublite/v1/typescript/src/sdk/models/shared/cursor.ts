import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Cursor
/** 
 * A cursor that describes the position of a message within a topic partition.
**/
export class Cursor extends SpeakeasyBase {
  @Metadata({ data: "json, name=offset" })
  offset?: string;
}
