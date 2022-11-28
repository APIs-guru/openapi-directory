import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DnsKeySpecAlgorithmEnum {
    Rsasha1 = "RSASHA1",
    Rsasha256 = "RSASHA256",
    Rsasha512 = "RSASHA512",
    Ecdsap256Sha256 = "ECDSAP256SHA256",
    Ecdsap384Sha384 = "ECDSAP384SHA384"
}

export enum DnsKeySpecKeyTypeEnum {
    KeySigning = "KEY_SIGNING",
    ZoneSigning = "ZONE_SIGNING"
}


// DnsKeySpec
/** 
 * Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
**/
export class DnsKeySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: DnsKeySpecAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=keyLength" })
  keyLength?: number;

  @SpeakeasyMetadata({ data: "json, name=keyType" })
  keyType?: DnsKeySpecKeyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
