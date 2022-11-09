import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DomainRecordTagEnum {
    Issue = "issue"
,    Issuewild = "issuewild"
,    Iodef = "iodef"
}

export enum DomainRecordTypeEnum {
    A = "A"
,    Aaaa = "AAAA"
,    Ns = "NS"
,    Mx = "MX"
,    Cname = "CNAME"
,    Txt = "TXT"
,    Srv = "SRV"
,    Ptr = "PTR"
,    Caa = "CAA"
}


// DomainRecord
/** 
 * A single record on a Domain.
 * 
**/
export class DomainRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: DomainRecordTagEnum;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @Metadata({ data: "json, name=type" })
  type?: DomainRecordTypeEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
