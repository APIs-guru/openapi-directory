import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RoleKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    Role = "ROLE",
    ClusterRole = "CLUSTER_ROLE"
}
/**
 * Kubernetes Role or ClusterRole.
**/
export declare class Role extends SpeakeasyBase {
    kind?: RoleKindEnum;
    name?: string;
    ns?: string;
}
