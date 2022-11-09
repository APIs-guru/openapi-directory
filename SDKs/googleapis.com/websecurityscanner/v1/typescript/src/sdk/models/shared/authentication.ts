import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomAccount } from "./customaccount";
import { GoogleAccount } from "./googleaccount";
import { IapCredential } from "./iapcredential";


// Authentication
/** 
 * Scan authentication configuration.
**/
export class Authentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=customAccount" })
  customAccount?: CustomAccount;

  @Metadata({ data: "json, name=googleAccount" })
  googleAccount?: GoogleAccount;

  @Metadata({ data: "json, name=iapCredential" })
  iapCredential?: IapCredential;
}
