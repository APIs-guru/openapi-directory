import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DnsKeyDigestTypeEnum {
    Sha1 = "sha1",
    Sha256 = "sha256",
    Sha384 = "sha384"
}
export declare class DnsKeyDigest extends SpeakeasyBase {
    digest?: string;
    type?: DnsKeyDigestTypeEnum;
}
