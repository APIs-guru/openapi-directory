import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTenancyUnitRequest
/** 
 * Request to create a tenancy unit for a service consumer of a managed service.
**/
export class CreateTenancyUnitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tenancyUnitId" })
  tenancyUnitId?: string;
}
