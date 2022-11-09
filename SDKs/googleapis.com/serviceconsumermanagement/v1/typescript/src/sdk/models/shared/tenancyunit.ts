import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TenantResource } from "./tenantresource";


// TenancyUnit
/** 
 * Representation of a tenancy unit.
**/
export class TenancyUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumer" })
  consumer?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=tenantResources", elemType: shared.TenantResource })
  tenantResources?: TenantResource[];
}
