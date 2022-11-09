import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax_tel" })
  faxTel?: string;

  @Metadata({ data: "json, name=main_tel" })
  mainTel?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=org_guid" })
  orgGuid?: string;

  @Metadata({ data: "json, name=org_verbose_name" })
  orgVerboseName?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=province_state" })
  provinceState: string;

  @Metadata({ data: "json, name=street_address" })
  streetAddress?: string;

  @Metadata({ data: "json, name=website_url" })
  websiteUrl?: string;
}
