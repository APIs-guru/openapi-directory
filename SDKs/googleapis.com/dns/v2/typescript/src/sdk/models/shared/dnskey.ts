import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsKeyDigest } from "./dnskeydigest";

export enum DnsKeyAlgorithmEnum {
    Rsasha1 = "RSASHA1"
,    Rsasha256 = "RSASHA256"
,    Rsasha512 = "RSASHA512"
,    Ecdsap256Sha256 = "ECDSAP256SHA256"
,    Ecdsap384Sha384 = "ECDSAP384SHA384"
}

export enum DnsKeyTypeEnum {
    KeySigning = "KEY_SIGNING"
,    ZoneSigning = "ZONE_SIGNING"
}


// DnsKey
/** 
 * A DNSSEC key pair.
**/
export class DnsKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: DnsKeyAlgorithmEnum;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=digests", elemType: shared.DnsKeyDigest })
  digests?: DnsKeyDigest[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=keyLength" })
  keyLength?: number;

  @Metadata({ data: "json, name=keyTag" })
  keyTag?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=type" })
  type?: DnsKeyTypeEnum;
}
