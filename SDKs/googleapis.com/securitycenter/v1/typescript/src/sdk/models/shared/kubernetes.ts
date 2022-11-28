import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessReview } from "./accessreview";
import { GoogleCloudSecuritycenterV1Binding } from "./googlecloudsecuritycenterv1binding";
import { NodePool } from "./nodepool";
import { Node } from "./node";
import { Pod } from "./pod";
import { Role } from "./role";



// Kubernetes
/** 
 * Kubernetes related attributes.
**/
export class Kubernetes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessReviews", elemType: AccessReview })
  accessReviews?: AccessReview[];

  @SpeakeasyMetadata({ data: "json, name=bindings", elemType: GoogleCloudSecuritycenterV1Binding })
  bindings?: GoogleCloudSecuritycenterV1Binding[];

  @SpeakeasyMetadata({ data: "json, name=nodePools", elemType: NodePool })
  nodePools?: NodePool[];

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: Node })
  nodes?: Node[];

  @SpeakeasyMetadata({ data: "json, name=pods", elemType: Pod })
  pods?: Pod[];

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: Role })
  roles?: Role[];
}
