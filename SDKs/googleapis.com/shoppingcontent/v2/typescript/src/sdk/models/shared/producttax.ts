import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=taxShip" })
  taxShip?: boolean;
}
