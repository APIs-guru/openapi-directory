import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Provider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=admin_contact" })
  adminContact?: string;

  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=circuit_count" })
  circuitCount?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=noc_contact" })
  nocContact?: string;

  @SpeakeasyMetadata({ data: "json, name=portal_url" })
  portalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class ProviderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=admin_contact" })
  adminContact?: string;

  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=noc_contact" })
  nocContact?: string;

  @SpeakeasyMetadata({ data: "json, name=portal_url" })
  portalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
