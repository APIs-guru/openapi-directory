import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedTenantGroup } from "./nestedtenantgroup";


export class Tenant extends SpeakeasyBase {
  @Metadata({ data: "json, name=circuit_count" })
  circuitCount?: number;

  @Metadata({ data: "json, name=cluster_count" })
  clusterCount?: number;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @Metadata({ data: "json, name=group" })
  group?: NestedTenantGroup;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=ipaddress_count" })
  ipaddressCount?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prefix_count" })
  prefixCount?: number;

  @Metadata({ data: "json, name=rack_count" })
  rackCount?: number;

  @Metadata({ data: "json, name=site_count" })
  siteCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;

  @Metadata({ data: "json, name=vlan_count" })
  vlanCount?: number;

  @Metadata({ data: "json, name=vrf_count" })
  vrfCount?: number;
}
