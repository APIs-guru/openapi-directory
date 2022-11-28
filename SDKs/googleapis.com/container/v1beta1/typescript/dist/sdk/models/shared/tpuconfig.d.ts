import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for Cloud TPU.
**/
export declare class TpuConfig extends SpeakeasyBase {
    enabled?: boolean;
    ipv4CidrBlock?: string;
    useServiceNetworking?: boolean;
}
