import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedTenantGroup } from "./nestedtenantgroup";



export class Tenant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=circuit_count" })
  circuitCount?: number;

  @SpeakeasyMetadata({ data: "json, name=cluster_count" })
  clusterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: NestedTenantGroup;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ipaddress_count" })
  ipaddressCount?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prefix_count" })
  prefixCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rack_count" })
  rackCount?: number;

  @SpeakeasyMetadata({ data: "json, name=site_count" })
  siteCount?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vlan_count" })
  vlanCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vrf_count" })
  vrfCount?: number;
}
