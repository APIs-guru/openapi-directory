import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicKeyCredential } from "./publickeycredential";


// DeviceCredential
/** 
 * A server-stored device credential used for authentication.
**/
export class DeviceCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: PublicKeyCredential;
}
