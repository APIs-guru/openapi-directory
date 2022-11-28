import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
import { Subject } from "./subject";



// GoogleCloudSecuritycenterV1Binding
/** 
 * Represents a Kubernetes RoleBinding or ClusterRoleBinding.
**/
export class GoogleCloudSecuritycenterV1Binding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ns" })
  ns?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: Role;

  @SpeakeasyMetadata({ data: "json, name=subjects", elemType: Subject })
  subjects?: Subject[];
}
