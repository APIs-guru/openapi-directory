import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=accessReviews", elemType: shared.AccessReview })
  accessReviews?: AccessReview[];

  @Metadata({ data: "json, name=bindings", elemType: shared.GoogleCloudSecuritycenterV1Binding })
  bindings?: GoogleCloudSecuritycenterV1Binding[];

  @Metadata({ data: "json, name=nodePools", elemType: shared.NodePool })
  nodePools?: NodePool[];

  @Metadata({ data: "json, name=nodes", elemType: shared.Node })
  nodes?: Node[];

  @Metadata({ data: "json, name=pods", elemType: shared.Pod })
  pods?: Pod[];

  @Metadata({ data: "json, name=roles", elemType: shared.Role })
  roles?: Role[];
}
