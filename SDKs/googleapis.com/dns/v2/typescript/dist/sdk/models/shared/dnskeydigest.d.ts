import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DnsKeyDigestTypeEnum {
    Sha1 = "SHA1",
    Sha256 = "SHA256",
    Sha384 = "SHA384"
}
export declare class DnsKeyDigest extends SpeakeasyBase {
    digest?: string;
    type?: DnsKeyDigestTypeEnum;
}
