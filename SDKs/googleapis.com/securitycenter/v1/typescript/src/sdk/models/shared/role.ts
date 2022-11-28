import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RoleKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    Role = "ROLE",
    ClusterRole = "CLUSTER_ROLE"
}


// Role
/** 
 * Kubernetes Role or ClusterRole.
**/
export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: RoleKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ns" })
  ns?: string;
}
