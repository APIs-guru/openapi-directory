import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKeyDigest } from "./dnskeydigest";
export declare enum DnsKeyAlgorithmEnum {
    Rsasha1 = "rsasha1",
    Rsasha256 = "rsasha256",
    Rsasha512 = "rsasha512",
    Ecdsap256sha256 = "ecdsap256sha256",
    Ecdsap384sha384 = "ecdsap384sha384"
}
export declare enum DnsKeyTypeEnum {
    KeySigning = "keySigning",
    ZoneSigning = "zoneSigning"
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
