import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Guaranteed
/** 
 * Guaranteed tier definition.
**/
export class Guaranteed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minDuration" })
  minDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=reserved" })
  reserved?: boolean;
}
