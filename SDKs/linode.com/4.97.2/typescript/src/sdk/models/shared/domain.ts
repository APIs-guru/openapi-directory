import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DomainStatusEnum {
    Disabled = "disabled",
    Active = "active"
}

export enum DomainTypeEnum {
    Master = "master",
    Slave = "slave"
}


// DomainInput
/** 
 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
 * 
**/
export class DomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=axfr_ips" })
  axfrIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=expire_sec" })
  expireSec?: number;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=master_ips" })
  masterIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=refresh_sec" })
  refreshSec?: number;

  @SpeakeasyMetadata({ data: "json, name=retry_sec" })
  retrySec?: number;

  @SpeakeasyMetadata({ data: "json, name=soa_email" })
  soaEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DomainStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DomainTypeEnum;
}


// Domain
/** 
 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
 * 
**/
export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=axfr_ips" })
  axfrIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=expire_sec" })
  expireSec?: number;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=master_ips" })
  masterIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=refresh_sec" })
  refreshSec?: number;

  @SpeakeasyMetadata({ data: "json, name=retry_sec" })
  retrySec?: number;

  @SpeakeasyMetadata({ data: "json, name=soa_email" })
  soaEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DomainStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DomainTypeEnum;
}
