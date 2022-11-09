import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Standard
/** 
 * Standard represents the standard deployment strategy.
**/
export class Standard extends SpeakeasyBase {
  @Metadata({ data: "json, name=verify" })
  verify?: boolean;
}
