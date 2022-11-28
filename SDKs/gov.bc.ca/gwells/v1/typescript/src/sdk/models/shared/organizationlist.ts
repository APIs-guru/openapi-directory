import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrganizationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax_tel" })
  faxTel?: string;

  @SpeakeasyMetadata({ data: "json, name=main_tel" })
  mainTel?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=org_guid" })
  orgGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=org_verbose_name" })
  orgVerboseName?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=province_state" })
  provinceState: string;

  @SpeakeasyMetadata({ data: "json, name=street_address" })
  streetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=website_url" })
  websiteUrl?: string;
}
