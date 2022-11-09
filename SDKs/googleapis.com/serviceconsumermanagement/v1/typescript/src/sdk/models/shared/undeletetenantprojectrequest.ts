import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UndeleteTenantProjectRequest
/** 
 * Request message to undelete tenant project resource previously deleted from the tenancy unit.
**/
export class UndeleteTenantProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
