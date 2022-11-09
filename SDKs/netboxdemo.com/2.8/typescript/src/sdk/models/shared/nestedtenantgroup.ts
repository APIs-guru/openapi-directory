import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NestedTenantGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=tenant_count" })
  tenantCount?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
