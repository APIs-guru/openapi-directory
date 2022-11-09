import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddressClaimSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=formatted" })
  formatted?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=street_address" })
  streetAddress?: string;
}
