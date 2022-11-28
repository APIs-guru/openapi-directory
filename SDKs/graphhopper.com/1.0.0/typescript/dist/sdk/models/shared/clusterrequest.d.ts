import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { ClusterCustomer } from "./clustercustomer";
export declare class ClusterRequest extends SpeakeasyBase {
    configuration?: ClusterConfiguration;
    customers?: ClusterCustomer[];
}
