import { SpeakeasyBase } from "../../../internal/utils";
import { DnsRecordSet } from "./dnsrecordset";
/**
 * Request to remove a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values must all exactly match an existing record set in the specified zone.
**/
export declare class RemoveDnsRecordSetRequest extends SpeakeasyBase {
    consumerNetwork?: string;
    dnsRecordSet?: DnsRecordSet;
    zone?: string;
}
