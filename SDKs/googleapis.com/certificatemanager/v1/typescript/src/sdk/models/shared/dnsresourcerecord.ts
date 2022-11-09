import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DnsResourceRecord
/** 
 * The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.
**/
export class DnsResourceRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
