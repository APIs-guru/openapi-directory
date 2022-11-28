import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableConfigContextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster_groups" })
  clusterGroups?: number[];

  @SpeakeasyMetadata({ data: "json, name=clusters" })
  clusters?: number[];

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platforms" })
  platforms?: number[];

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: number[];

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: number[];

  @SpeakeasyMetadata({ data: "json, name=sites" })
  sites?: number[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant_groups" })
  tenantGroups?: number[];

  @SpeakeasyMetadata({ data: "json, name=tenants" })
  tenants?: number[];

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
