import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DomainRecordTagEnum {
    Issue = "issue",
    Issuewild = "issuewild",
    Iodef = "iodef"
}
export declare enum DomainRecordTypeEnum {
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
/**
 * A single record on a Domain.
 *
**/
export declare class DomainRecord extends SpeakeasyBase {
    created?: Date;
    id?: number;
    name?: string;
    port?: number;
    priority?: number;
    protocol?: string;
    service?: string;
    tag?: DomainRecordTagEnum;
    target?: string;
    ttlSec?: number;
    type?: DomainRecordTypeEnum;
    updated?: Date;
    weight?: number;
}
/**
 * A single record on a Domain.
 *
**/
export declare class DomainRecordInput extends SpeakeasyBase {
    name?: string;
    port?: number;
    priority?: number;
    protocol?: string;
    service?: string;
    tag?: DomainRecordTagEnum;
    target?: string;
    ttlSec?: number;
    type?: DomainRecordTypeEnum;
    weight?: number;
}
