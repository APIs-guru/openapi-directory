import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteTenantProjectRequest
/** 
 * Request message to delete tenant project resource from the tenancy unit.
**/
export class DeleteTenantProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
