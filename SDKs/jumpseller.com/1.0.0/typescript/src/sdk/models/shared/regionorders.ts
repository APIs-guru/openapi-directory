import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegionOrders extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=country" })
  country?: number;
}
