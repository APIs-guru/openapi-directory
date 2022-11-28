import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsResourceRecord
/** 
 * The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.
**/
export class DnsResourceRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
