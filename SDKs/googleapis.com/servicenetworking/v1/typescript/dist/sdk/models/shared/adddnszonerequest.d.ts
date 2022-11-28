import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to add a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
**/
export declare class AddDnsZoneRequest extends SpeakeasyBase {
    consumerNetwork?: string;
    dnsSuffix?: string;
    name?: string;
}
