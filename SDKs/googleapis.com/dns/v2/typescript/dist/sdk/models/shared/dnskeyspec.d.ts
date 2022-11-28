import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DnsKeySpecAlgorithmEnum {
    Rsasha1 = "RSASHA1",
    Rsasha256 = "RSASHA256",
    Rsasha512 = "RSASHA512",
    Ecdsap256Sha256 = "ECDSAP256SHA256",
    Ecdsap384Sha384 = "ECDSAP384SHA384"
}
export declare enum DnsKeySpecKeyTypeEnum {
    KeySigning = "KEY_SIGNING",
    ZoneSigning = "ZONE_SIGNING"
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
