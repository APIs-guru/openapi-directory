import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PeeredDnsDomain } from "./peereddnsdomain";



// ListPeeredDnsDomainsResponse
/** 
 * Response to list peered DNS domains for a given connection.
**/
export class ListPeeredDnsDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=peeredDnsDomains", elemType: PeeredDnsDomain })
  peeredDnsDomains?: PeeredDnsDomain[];
}
