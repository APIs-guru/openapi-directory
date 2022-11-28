import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to remove a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
**/
export declare class RemoveDnsZoneRequest extends SpeakeasyBase {
    consumerNetwork?: string;
    name?: string;
}
