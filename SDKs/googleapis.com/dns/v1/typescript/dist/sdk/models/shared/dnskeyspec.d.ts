import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DnsKeySpecAlgorithmEnum {
    Rsasha1 = "rsasha1",
    Rsasha256 = "rsasha256",
    Rsasha512 = "rsasha512",
    Ecdsap256sha256 = "ecdsap256sha256",
    Ecdsap384sha384 = "ecdsap384sha384"
}
export declare enum DnsKeySpecKeyTypeEnum {
    KeySigning = "keySigning",
    ZoneSigning = "zoneSigning"
}
/**
 * Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
**/
export declare class DnsKeySpec extends SpeakeasyBase {
    algorithm?: DnsKeySpecAlgorithmEnum;
    keyLength?: number;
    keyType?: DnsKeySpecKeyTypeEnum;
    kind?: string;
}
