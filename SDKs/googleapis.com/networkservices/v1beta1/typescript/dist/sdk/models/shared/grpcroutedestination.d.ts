import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination to which traffic will be routed.
**/
export declare class GrpcRouteDestination extends SpeakeasyBase {
    serviceName?: string;
    weight?: number;
}
