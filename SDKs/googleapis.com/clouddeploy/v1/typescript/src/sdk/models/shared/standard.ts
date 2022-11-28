import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Standard
/** 
 * Standard represents the standard deployment strategy.
**/
export class Standard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verify" })
  verify?: boolean;
}
