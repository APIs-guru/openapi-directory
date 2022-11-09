import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DnsKeySpecAlgorithmEnum {
    Rsasha1 = "rsasha1"
,    Rsasha256 = "rsasha256"
,    Rsasha512 = "rsasha512"
,    Ecdsap256sha256 = "ecdsap256sha256"
,    Ecdsap384sha384 = "ecdsap384sha384"
}

export enum DnsKeySpecKeyTypeEnum {
    KeySigning = "keySigning"
,    ZoneSigning = "zoneSigning"
}


// DnsKeySpec
/** 
 * Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
**/
export class DnsKeySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: DnsKeySpecAlgorithmEnum;

  @Metadata({ data: "json, name=keyLength" })
  keyLength?: number;

  @Metadata({ data: "json, name=keyType" })
  keyType?: DnsKeySpecKeyTypeEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
