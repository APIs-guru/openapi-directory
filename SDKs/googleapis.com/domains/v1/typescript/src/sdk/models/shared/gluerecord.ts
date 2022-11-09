import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlueRecord
/** 
 * Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference.
**/
export class GlueRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostName" })
  hostName?: string;

  @Metadata({ data: "json, name=ipv4Addresses" })
  ipv4Addresses?: string[];

  @Metadata({ data: "json, name=ipv6Addresses" })
  ipv6Addresses?: string[];
}
