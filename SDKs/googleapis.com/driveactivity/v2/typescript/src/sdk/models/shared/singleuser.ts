import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SingleUser
/** 
 * Wrapper for User Field value.
**/
export class SingleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
