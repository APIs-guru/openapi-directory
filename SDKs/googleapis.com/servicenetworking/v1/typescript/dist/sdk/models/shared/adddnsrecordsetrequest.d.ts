import { SpeakeasyBase } from "../../../internal/utils";
import { DnsRecordSet } from "./dnsrecordset";
/**
 * Request to add a record set to a private managed DNS zone in the shared producer host project.
**/
export declare class AddDnsRecordSetRequest extends SpeakeasyBase {
    consumerNetwork?: string;
    dnsRecordSet?: DnsRecordSet;
    zone?: string;
}
