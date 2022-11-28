import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrganizationOwner
/** 
 * The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted.
**/
export class OrganizationOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directoryCustomerId" })
  directoryCustomerId?: string;
}
