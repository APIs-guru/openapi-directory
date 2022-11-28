import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationOwner } from "./organizationowner";


export enum OrganizationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}


// Organization
/** 
 * The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong.
**/
export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycleState" })
  lifecycleState?: OrganizationLifecycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: OrganizationOwner;
}
