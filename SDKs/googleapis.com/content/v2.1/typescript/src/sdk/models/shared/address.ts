import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=administrativeArea" })
  administrativeArea?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAddress" })
  streetAddress?: string;
}
