import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UndeleteTenantProjectRequest
/** 
 * Request message to undelete tenant project resource previously deleted from the tenancy unit.
**/
export class UndeleteTenantProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
