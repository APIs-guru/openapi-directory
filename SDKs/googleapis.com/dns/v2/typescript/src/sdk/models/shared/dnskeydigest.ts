import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DnsKeyDigestTypeEnum {
    Sha1 = "SHA1"
,    Sha256 = "SHA256"
,    Sha384 = "SHA384"
}


export class DnsKeyDigest extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: string;

  @Metadata({ data: "json, name=type" })
  type?: DnsKeyDigestTypeEnum;
}
