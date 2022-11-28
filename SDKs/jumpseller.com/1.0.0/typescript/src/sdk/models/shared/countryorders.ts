import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionOrders } from "./regionorders";



export class CountryOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: RegionOrders })
  orders?: RegionOrders[];
}
