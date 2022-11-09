import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IndoorLevel
/** 
 * Indoor level, a human-readable string as returned by Google Maps APIs, useful to indicate which floor of a building a beacon is located on.
**/
export class IndoorLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
