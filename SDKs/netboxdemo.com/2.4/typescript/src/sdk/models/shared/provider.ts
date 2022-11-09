import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Provider extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=admin_contact" })
  adminContact?: string;

  @Metadata({ data: "json, name=asn" })
  asn?: number;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=noc_contact" })
  nocContact?: string;

  @Metadata({ data: "json, name=portal_url" })
  portalUrl?: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
