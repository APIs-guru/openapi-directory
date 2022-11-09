import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RoleKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED"
,    Role = "ROLE"
,    ClusterRole = "CLUSTER_ROLE"
}


// Role
/** 
 * Kubernetes Role or ClusterRole.
**/
export class Role extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: RoleKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ns" })
  ns?: string;
}
