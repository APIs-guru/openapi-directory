import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableSiteStatusEnum {
    Active = "active",
    Planned = "planned",
    Retired = "retired"
}


export class WritableSiteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_phone" })
  contactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=facility" })
  facility?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=physical_address" })
  physicalAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: number;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WritableSiteStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;
}
