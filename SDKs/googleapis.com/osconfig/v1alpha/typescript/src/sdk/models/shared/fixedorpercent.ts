import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FixedOrPercent
/** 
 * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
**/
export class FixedOrPercent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixed" })
  fixed?: number;

  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;
}
