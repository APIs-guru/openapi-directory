import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DomainStatusEnum {
    Disabled = "disabled",
    Active = "active"
}
export declare enum DomainTypeEnum {
    Master = "master",
    Slave = "slave"
}
/**
 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
 *
**/
export declare class DomainInput extends SpeakeasyBase {
    axfrIps?: string[];
    description?: string;
    domain?: string;
    expireSec?: number;
    group?: string;
    masterIps?: string[];
    refreshSec?: number;
    retrySec?: number;
    soaEmail?: string;
    status?: DomainStatusEnum;
    tags?: string[];
    ttlSec?: number;
    type?: DomainTypeEnum;
}
/**
 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
 *
**/
export declare class Domain extends SpeakeasyBase {
    axfrIps?: string[];
    description?: string;
    domain?: string;
    expireSec?: number;
    group?: string;
    id?: number;
    masterIps?: string[];
    refreshSec?: number;
    retrySec?: number;
    soaEmail?: string;
    status?: DomainStatusEnum;
    tags?: string[];
    ttlSec?: number;
    type?: DomainTypeEnum;
}
