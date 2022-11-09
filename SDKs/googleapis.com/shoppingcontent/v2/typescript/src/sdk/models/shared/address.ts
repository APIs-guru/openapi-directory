import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=administrativeArea" })
  administrativeArea?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=streetAddress" })
  streetAddress?: string;
}
