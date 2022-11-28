import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTenantProjectRequest
/** 
 * Request message to remove a tenant project resource from the tenancy unit.
**/
export class RemoveTenantProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
