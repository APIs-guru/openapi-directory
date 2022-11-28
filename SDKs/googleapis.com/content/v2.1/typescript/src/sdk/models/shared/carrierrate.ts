import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class CarrierRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @SpeakeasyMetadata({ data: "json, name=carrierService" })
  carrierService?: string;

  @SpeakeasyMetadata({ data: "json, name=flatAdjustment" })
  flatAdjustment?: Price;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originPostalCode" })
  originPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=percentageAdjustment" })
  percentageAdjustment?: string;
}
