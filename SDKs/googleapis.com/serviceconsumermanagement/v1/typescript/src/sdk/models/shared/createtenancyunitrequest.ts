import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateTenancyUnitRequest
/** 
 * Request to create a tenancy unit for a service consumer of a managed service.
**/
export class CreateTenancyUnitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tenancyUnitId" })
  tenancyUnitId?: string;
}
