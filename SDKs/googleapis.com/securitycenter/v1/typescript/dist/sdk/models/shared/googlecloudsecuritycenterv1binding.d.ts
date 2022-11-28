import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
import { Subject } from "./subject";
/**
 * Represents a Kubernetes RoleBinding or ClusterRoleBinding.
**/
export declare class GoogleCloudSecuritycenterV1Binding extends SpeakeasyBase {
    name?: string;
    ns?: string;
    role?: Role;
    subjects?: Subject[];
}
