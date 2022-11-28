import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1Access } from "./googlecloudassetv1access";
import { ConditionEvaluation } from "./conditionevaluation";
import { GoogleCloudAssetV1Edge } from "./googlecloudassetv1edge";
import { GoogleCloudAssetV1Resource } from "./googlecloudassetv1resource";
/**
 * An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3]
**/
export declare class GoogleCloudAssetV1AccessControlList extends SpeakeasyBase {
    accesses?: GoogleCloudAssetV1Access[];
    conditionEvaluation?: ConditionEvaluation;
    resourceEdges?: GoogleCloudAssetV1Edge[];
    resources?: GoogleCloudAssetV1Resource[];
}
