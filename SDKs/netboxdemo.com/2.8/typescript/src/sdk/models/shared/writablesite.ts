import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableSiteStatusEnum {
    Active = "active"
,    Planned = "planned"
,    Retired = "retired"
}


export class WritableSite extends SpeakeasyBase {
  @Metadata({ data: "json, name=asn" })
  asn?: number;

  @Metadata({ data: "json, name=circuit_count" })
  circuitCount?: number;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @Metadata({ data: "json, name=contact_name" })
  contactName?: string;

  @Metadata({ data: "json, name=contact_phone" })
  contactPhone?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @Metadata({ data: "json, name=facility" })
  facility?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=physical_address" })
  physicalAddress?: string;

  @Metadata({ data: "json, name=prefix_count" })
  prefixCount?: number;

  @Metadata({ data: "json, name=rack_count" })
  rackCount?: number;

  @Metadata({ data: "json, name=region" })
  region?: number;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=status" })
  status?: WritableSiteStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @Metadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;

  @Metadata({ data: "json, name=vlan_count" })
  vlanCount?: number;
}
