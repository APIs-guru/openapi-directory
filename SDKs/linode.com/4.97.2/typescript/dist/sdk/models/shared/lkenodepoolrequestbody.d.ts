import { SpeakeasyBase } from "../../../internal/utils";
import { Items } from "./items";
/**
 * Specifies a collection of Linodes which will be members of a Kubernetes cluster.
 *
**/
export declare class LkeNodePoolRequestBody extends SpeakeasyBase {
    count?: number;
    disks?: Items[];
    tags?: string[];
    type?: string;
}
