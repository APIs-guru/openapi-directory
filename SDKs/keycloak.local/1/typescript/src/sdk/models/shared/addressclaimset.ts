import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddressClaimSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=street_address" })
  streetAddress?: string;
}
