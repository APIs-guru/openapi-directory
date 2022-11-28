import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyCertificate } from "./publickeycertificate";



// RegistryCredential
/** 
 * A server-stored registry credential used to validate device credentials.
**/
export class RegistryCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicKeyCertificate" })
  publicKeyCertificate?: PublicKeyCertificate;
}
