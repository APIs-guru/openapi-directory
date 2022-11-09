import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicKeyCertificate } from "./publickeycertificate";


// RegistryCredential
/** 
 * A server-stored registry credential used to validate device credentials.
**/
export class RegistryCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=publicKeyCertificate" })
  publicKeyCertificate?: PublicKeyCertificate;
}
