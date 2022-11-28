import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyCredential } from "./publickeycredential";



// DeviceCredential
/** 
 * A server-stored device credential used for authentication.
**/
export class DeviceCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: PublicKeyCredential;
}
