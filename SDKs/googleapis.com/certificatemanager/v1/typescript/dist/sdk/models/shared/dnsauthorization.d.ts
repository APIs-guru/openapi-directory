import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsResourceRecord } from "./dnsresourcerecord";
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
