import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedTenantGroup } from "./nestedtenantgroup";


export class TenantGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent" })
  parent?: NestedTenantGroup;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=tenant_count" })
  tenantCount?: number;
}
