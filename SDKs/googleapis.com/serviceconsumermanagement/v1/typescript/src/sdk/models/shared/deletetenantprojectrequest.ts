import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTenantProjectRequest
/** 
 * Request message to delete tenant project resource from the tenancy unit.
**/
export class DeleteTenantProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
