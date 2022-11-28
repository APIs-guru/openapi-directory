import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { PerXdsConfig } from "./perxdsconfig";
/**
 * All xds configs for a particular client.
**/
export declare class ClientConfig extends SpeakeasyBase {
    node?: Node;
    xdsConfig?: PerXdsConfig[];
}
