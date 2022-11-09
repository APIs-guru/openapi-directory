import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class ProductShipping extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=locationGroupName" })
  locationGroupName?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=maxHandlingTime" })
  maxHandlingTime?: string;

  @Metadata({ data: "json, name=maxTransitTime" })
  maxTransitTime?: string;

  @Metadata({ data: "json, name=minHandlingTime" })
  minHandlingTime?: string;

  @Metadata({ data: "json, name=minTransitTime" })
  minTransitTime?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
