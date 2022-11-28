import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DnsKeyDigestTypeEnum {
    Sha1 = "sha1",
    Sha256 = "sha256",
    Sha384 = "sha384"
}


export class DnsKeyDigest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DnsKeyDigestTypeEnum;
}
