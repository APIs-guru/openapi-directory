import { SpeakeasyBase } from "../../../internal/utils";
import { AccessReview } from "./accessreview";
import { GoogleCloudSecuritycenterV1Binding } from "./googlecloudsecuritycenterv1binding";
import { NodePool } from "./nodepool";
import { Node } from "./node";
import { Pod } from "./pod";
import { Role } from "./role";
/**
 * Kubernetes related attributes.
**/
export declare class Kubernetes extends SpeakeasyBase {
    accessReviews?: AccessReview[];
    bindings?: GoogleCloudSecuritycenterV1Binding[];
    nodePools?: NodePool[];
    nodes?: Node[];
    pods?: Pod[];
    roles?: Role[];
}
