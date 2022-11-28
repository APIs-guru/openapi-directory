import { SpeakeasyBase } from "../../../internal/utils";
import { DsaPublicKeyInfo } from "./dsapublickeyinfo";
import { RsaPublicKeyInfo } from "./rsapublickeyinfo";
/**
 * Credential for verifying signatures produced by the Identity Provider.
**/
export declare class IdpCredential extends SpeakeasyBase {
    dsaKeyInfo?: DsaPublicKeyInfo;
    name?: string;
    rsaKeyInfo?: RsaPublicKeyInfo;
    updateTime?: string;
}
