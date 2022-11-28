import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TenantResource } from "./tenantresource";



// TenancyUnit
/** 
 * Representation of a tenancy unit.
**/
export class TenancyUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumer" })
  consumer?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantResources", elemType: TenantResource })
  tenantResources?: TenantResource[];
}
