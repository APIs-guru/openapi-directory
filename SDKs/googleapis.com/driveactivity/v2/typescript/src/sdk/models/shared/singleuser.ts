import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SingleUser
/** 
 * Wrapper for User Field value.
**/
export class SingleUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
