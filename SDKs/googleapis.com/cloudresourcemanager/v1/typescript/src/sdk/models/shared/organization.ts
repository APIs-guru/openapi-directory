import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationOwner } from "./organizationowner";

export enum OrganizationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    DeleteRequested = "DELETE_REQUESTED"
}


// Organization
/** 
 * The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong.
**/
export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=lifecycleState" })
  lifecycleState?: OrganizationLifecycleStateEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: OrganizationOwner;
}
