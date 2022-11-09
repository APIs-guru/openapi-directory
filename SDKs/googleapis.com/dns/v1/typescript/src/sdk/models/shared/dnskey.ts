import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsKeyDigest } from "./dnskeydigest";

export enum DnsKeyAlgorithmEnum {
    Rsasha1 = "rsasha1"
,    Rsasha256 = "rsasha256"
,    Rsasha512 = "rsasha512"
,    Ecdsap256sha256 = "ecdsap256sha256"
,    Ecdsap384sha384 = "ecdsap384sha384"
}

export enum DnsKeyTypeEnum {
    KeySigning = "keySigning"
,    ZoneSigning = "zoneSigning"
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
