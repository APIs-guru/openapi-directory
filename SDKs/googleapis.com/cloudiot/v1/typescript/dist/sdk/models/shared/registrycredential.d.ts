import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicKeyCertificate } from "./publickeycertificate";
/**
 * A server-stored registry credential used to validate device credentials.
**/
export declare class RegistryCredential extends SpeakeasyBase {
    publicKeyCertificate?: PublicKeyCertificate;
}
