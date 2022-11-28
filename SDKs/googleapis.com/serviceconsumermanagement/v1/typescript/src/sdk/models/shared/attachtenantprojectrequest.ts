import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachTenantProjectRequest
/** 
 * Request to attach an existing project to the tenancy unit as a new tenant resource.
**/
export class AttachTenantProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalResource" })
  externalResource?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedResource" })
  reservedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
