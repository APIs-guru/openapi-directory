import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DomainRecordTagEnum {
    Issue = "issue",
    Issuewild = "issuewild",
    Iodef = "iodef"
}

export enum DomainRecordTypeEnum {
    A = "A",
    Aaaa = "AAAA",
    Ns = "NS",
    Mx = "MX",
    Cname = "CNAME",
    Txt = "TXT",
    Srv = "SRV",
    Ptr = "PTR",
    Caa = "CAA"
}


// DomainRecord
/** 
 * A single record on a Domain.
 * 
**/
export class DomainRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: DomainRecordTagEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DomainRecordTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}


// DomainRecordInput
/** 
 * A single record on a Domain.
 * 
**/
export class DomainRecordInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: DomainRecordTagEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DomainRecordTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
