import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomSourceLocation
/** 
 * Identifies the location of a custom souce.
**/
export class CustomSourceLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=stateful" })
  stateful?: boolean;
}
