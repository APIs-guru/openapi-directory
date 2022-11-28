import { SpeakeasyBase } from "../../../internal/utils";
import { DnsRecordSet } from "./dnsrecordset";
/**
 * Request to update a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values of the existing record set must all exactly match an existing record set in the specified zone.
**/
export declare class UpdateDnsRecordSetRequest extends SpeakeasyBase {
    consumerNetwork?: string;
    existingDnsRecordSet?: DnsRecordSet;
    newDnsRecordSet?: DnsRecordSet;
    zone?: string;
}
