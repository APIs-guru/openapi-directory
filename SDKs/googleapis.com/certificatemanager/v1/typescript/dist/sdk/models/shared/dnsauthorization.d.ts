import { SpeakeasyBase } from "../../../internal/utils";
import { DnsResourceRecord } from "./dnsresourcerecord";
/**
 * A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
**/
export declare class DnsAuthorizationInput extends SpeakeasyBase {
    description?: string;
    domain?: string;
    labels?: Map<string, string>;
    name?: string;
}
/**
 * A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
**/
export declare class DnsAuthorization extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    dnsResourceRecord?: DnsResourceRecord;
    domain?: string;
    labels?: Map<string, string>;
    name?: string;
    updateTime?: string;
}
