import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DomainStatusEnum {
    Disabled = "disabled"
,    Active = "active"
}

export enum DomainTypeEnum {
    Master = "master"
,    Slave = "slave"
}


// Domain
/** 
 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
 * 
**/
export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=axfr_ips" })
  axfrIps?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=expire_sec" })
  expireSec?: number;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=master_ips" })
  masterIps?: string[];

  @Metadata({ data: "json, name=refresh_sec" })
  refreshSec?: number;

  @Metadata({ data: "json, name=retry_sec" })
  retrySec?: number;

  @Metadata({ data: "json, name=soa_email" })
  soaEmail?: string;

  @Metadata({ data: "json, name=status" })
  status?: DomainStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @Metadata({ data: "json, name=type" })
  type?: DomainTypeEnum;
}
