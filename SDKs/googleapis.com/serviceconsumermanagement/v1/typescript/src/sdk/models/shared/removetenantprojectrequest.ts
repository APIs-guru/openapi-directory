import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTenantProjectRequest
/** 
 * Request message to remove a tenant project resource from the tenancy unit.
**/
export class RemoveTenantProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
