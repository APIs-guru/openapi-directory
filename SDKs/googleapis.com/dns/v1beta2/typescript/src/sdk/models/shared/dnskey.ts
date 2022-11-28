import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsKeyDigest } from "./dnskeydigest";


export enum DnsKeyAlgorithmEnum {
    Rsasha1 = "rsasha1",
    Rsasha256 = "rsasha256",
    Rsasha512 = "rsasha512",
    Ecdsap256sha256 = "ecdsap256sha256",
    Ecdsap384sha384 = "ecdsap384sha384"
}

export enum DnsKeyTypeEnum {
    KeySigning = "keySigning",
    ZoneSigning = "zoneSigning"
}


// DnsKey
/** 
 * A DNSSEC key pair.
**/
export class DnsKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: DnsKeyAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=digests", elemType: DnsKeyDigest })
  digests?: DnsKeyDigest[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyLength" })
  keyLength?: number;

  @SpeakeasyMetadata({ data: "json, name=keyTag" })
  keyTag?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DnsKeyTypeEnum;
}
