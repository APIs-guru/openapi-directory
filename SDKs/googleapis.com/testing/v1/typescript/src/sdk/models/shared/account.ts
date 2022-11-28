import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Account
/** 
 * Identifies an account and how to log into it.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleAuto" })
  googleAuto?: Map<string, any>;
}
