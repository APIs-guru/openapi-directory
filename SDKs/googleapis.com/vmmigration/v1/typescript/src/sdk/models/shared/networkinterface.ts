import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkInterface
/** 
 * NetworkInterface represents a NIC of a VM.
**/
export class NetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @Metadata({ data: "json, name=internalIp" })
  internalIp?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
