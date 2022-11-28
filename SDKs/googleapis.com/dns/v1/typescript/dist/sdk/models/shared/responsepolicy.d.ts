import { SpeakeasyBase } from "../../../internal/utils";
import { ResponsePolicyGkeCluster } from "./responsepolicygkecluster";
import { ResponsePolicyNetwork } from "./responsepolicynetwork";
/**
 * A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
**/
export declare class ResponsePolicy extends SpeakeasyBase {
    description?: string;
    gkeClusters?: ResponsePolicyGkeCluster[];
    id?: string;
    kind?: string;
    labels?: Map<string, string>;
    networks?: ResponsePolicyNetwork[];
    responsePolicyName?: string;
}
