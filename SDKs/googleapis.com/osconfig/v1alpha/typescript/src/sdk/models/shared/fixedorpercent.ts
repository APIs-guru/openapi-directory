import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FixedOrPercent
/** 
 * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
**/
export class FixedOrPercent extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixed" })
  fixed?: number;

  @Metadata({ data: "json, name=percent" })
  percent?: number;
}
