import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS.
**/
export declare class DnsPeering extends SpeakeasyBase {
    description?: string;
    domain?: string;
    name?: string;
    targetNetwork?: string;
    targetProject?: string;
}
