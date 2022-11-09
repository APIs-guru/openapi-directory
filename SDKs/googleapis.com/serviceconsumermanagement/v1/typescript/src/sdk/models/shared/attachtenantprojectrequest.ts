import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttachTenantProjectRequest
/** 
 * Request to attach an existing project to the tenancy unit as a new tenant resource.
**/
export class AttachTenantProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalResource" })
  externalResource?: string;

  @Metadata({ data: "json, name=reservedResource" })
  reservedResource?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
