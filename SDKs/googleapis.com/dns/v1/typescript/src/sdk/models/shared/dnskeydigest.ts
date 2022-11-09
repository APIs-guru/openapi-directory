import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DnsKeyDigestTypeEnum {
    Sha1 = "sha1"
,    Sha256 = "sha256"
,    Sha384 = "sha384"
}


export class DnsKeyDigest extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: string;

  @Metadata({ data: "json, name=type" })
  type?: DnsKeyDigestTypeEnum;
}
