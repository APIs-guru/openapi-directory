import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKeyDigest } from "./dnskeydigest";
export declare enum DnsKeyAlgorithmEnum {
    Rsasha1 = "RSASHA1",
    Rsasha256 = "RSASHA256",
    Rsasha512 = "RSASHA512",
    Ecdsap256Sha256 = "ECDSAP256SHA256",
    Ecdsap384Sha384 = "ECDSAP384SHA384"
}
export declare enum DnsKeyTypeEnum {
    KeySigning = "KEY_SIGNING",
    ZoneSigning = "ZONE_SIGNING"
}
/**
 * A DNSSEC key pair.
**/
export declare class DnsKey extends SpeakeasyBase {
    algorithm?: DnsKeyAlgorithmEnum;
    creationTime?: string;
    description?: string;
    digests?: DnsKeyDigest[];
    id?: string;
    isActive?: boolean;
    keyLength?: number;
    keyTag?: number;
    kind?: string;
    publicKey?: string;
    type?: DnsKeyTypeEnum;
}
