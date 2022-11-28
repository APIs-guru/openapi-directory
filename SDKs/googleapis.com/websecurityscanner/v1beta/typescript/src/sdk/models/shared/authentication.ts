import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAccount } from "./customaccount";
import { GoogleAccount } from "./googleaccount";
import { IapCredential } from "./iapcredential";



// Authentication
/** 
 * Scan authentication configuration.
**/
export class Authentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customAccount" })
  customAccount?: CustomAccount;

  @SpeakeasyMetadata({ data: "json, name=googleAccount" })
  googleAccount?: GoogleAccount;

  @SpeakeasyMetadata({ data: "json, name=iapCredential" })
  iapCredential?: IapCredential;
}
