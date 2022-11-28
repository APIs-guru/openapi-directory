import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegionOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: number;
}
