import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DnsKeyDigestTypeEnum {
    Sha1 = "SHA1",
    Sha256 = "SHA256",
    Sha384 = "SHA384"
}


export class DnsKeyDigest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DnsKeyDigestTypeEnum;
}
