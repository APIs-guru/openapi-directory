import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Role } from "./role";
import { Subject } from "./subject";


// GoogleCloudSecuritycenterV1Binding
/** 
 * Represents a Kubernetes RoleBinding or ClusterRoleBinding.
**/
export class GoogleCloudSecuritycenterV1Binding extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ns" })
  ns?: string;

  @Metadata({ data: "json, name=role" })
  role?: Role;

  @Metadata({ data: "json, name=subjects", elemType: shared.Subject })
  subjects?: Subject[];
}
