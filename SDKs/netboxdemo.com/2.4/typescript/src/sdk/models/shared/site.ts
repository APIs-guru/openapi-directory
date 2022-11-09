import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedRegion } from "./nestedregion";
import { NestedTenant } from "./nestedtenant";


export class SiteStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class Site extends SpeakeasyBase {
  @Metadata({ data: "json, name=asn" })
  asn?: number;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @Metadata({ data: "json, name=contact_name" })
  contactName?: string;

  @Metadata({ data: "json, name=contact_phone" })
  contactPhone?: string;

  @Metadata({ data: "json, name=count_circuits" })
  countCircuits?: number;

  @Metadata({ data: "json, name=count_devices" })
  countDevices?: number;

  @Metadata({ data: "json, name=count_prefixes" })
  countPrefixes?: number;

  @Metadata({ data: "json, name=count_racks" })
  countRacks?: number;

  @Metadata({ data: "json, name=count_vlans" })
  countVlans?: number;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

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

  @Metadata({ data: "json, name=region" })
  region?: NestedRegion;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=status" })
  status?: SiteStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=time_zone" })
  timeZone?: string;
}
