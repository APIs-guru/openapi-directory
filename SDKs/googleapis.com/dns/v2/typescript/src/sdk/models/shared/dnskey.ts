import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsKeyDigest } from "./dnskeydigest";


export enum DnsKeyAlgorithmEnum {
    Rsasha1 = "RSASHA1",
    Rsasha256 = "RSASHA256",
    Rsasha512 = "RSASHA512",
    Ecdsap256Sha256 = "ECDSAP256SHA256",
    Ecdsap384Sha384 = "ECDSAP384SHA384"
}

export enum DnsKeyTypeEnum {
    KeySigning = "KEY_SIGNING",
    ZoneSigning = "ZONE_SIGNING"
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
