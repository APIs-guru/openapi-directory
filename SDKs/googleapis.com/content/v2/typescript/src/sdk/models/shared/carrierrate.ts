import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class CarrierRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @Metadata({ data: "json, name=carrierService" })
  carrierService?: string;

  @Metadata({ data: "json, name=flatAdjustment" })
  flatAdjustment?: Price;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originPostalCode" })
  originPostalCode?: string;

  @Metadata({ data: "json, name=percentageAdjustment" })
  percentageAdjustment?: string;
}
