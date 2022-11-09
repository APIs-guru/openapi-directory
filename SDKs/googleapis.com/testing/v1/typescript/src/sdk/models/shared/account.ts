import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Account
/** 
 * Identifies an account and how to log into it.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleAuto" })
  googleAuto?: Map<string, any>;
}
