import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableConfigContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster_groups" })
  clusterGroups?: number[];

  @Metadata({ data: "json, name=clusters" })
  clusters?: number[];

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platforms" })
  platforms?: number[];

  @Metadata({ data: "json, name=regions" })
  regions?: number[];

  @Metadata({ data: "json, name=roles" })
  roles?: number[];

  @Metadata({ data: "json, name=sites" })
  sites?: number[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant_groups" })
  tenantGroups?: number[];

  @Metadata({ data: "json, name=tenants" })
  tenants?: number[];

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
