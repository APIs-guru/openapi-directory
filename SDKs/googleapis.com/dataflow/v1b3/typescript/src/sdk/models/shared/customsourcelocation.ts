import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomSourceLocation
/** 
 * Identifies the location of a custom souce.
**/
export class CustomSourceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stateful" })
  stateful?: boolean;
}
