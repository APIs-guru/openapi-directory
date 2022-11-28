import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedRegion } from "./nestedregion";
import { NestedTenant } from "./nestedtenant";


export enum SiteStatusLabelEnum {
    Active = "Active",
    Planned = "Planned",
    Retired = "Retired"
}

export enum SiteStatusValueEnum {
    Active = "active",
    Planned = "planned",
    Retired = "retired"
}


export class SiteStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: SiteStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: SiteStatusValueEnum;
}


export class Site extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=circuit_count" })
  circuitCount?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_phone" })
  contactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=facility" })
  facility?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=physical_address" })
  physicalAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix_count" })
  prefixCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rack_count" })
  rackCount?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: NestedRegion;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SiteStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vlan_count" })
  vlanCount?: number;
}
