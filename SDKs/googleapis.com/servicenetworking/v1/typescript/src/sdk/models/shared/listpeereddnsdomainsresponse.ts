import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PeeredDnsDomain } from "./peereddnsdomain";


// ListPeeredDnsDomainsResponse
/** 
 * Response to list peered DNS domains for a given connection.
**/
export class ListPeeredDnsDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=peeredDnsDomains", elemType: shared.PeeredDnsDomain })
  peeredDnsDomains?: PeeredDnsDomain[];
}
