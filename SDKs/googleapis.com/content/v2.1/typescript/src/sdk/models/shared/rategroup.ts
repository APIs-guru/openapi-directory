import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CarrierRate } from "./carrierrate";
import { Table } from "./table";
import { Value } from "./value";



export class RateGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicableShippingLabels" })
  applicableShippingLabels?: string[];

  @SpeakeasyMetadata({ data: "json, name=carrierRates", elemType: CarrierRate })
  carrierRates?: CarrierRate[];

  @SpeakeasyMetadata({ data: "json, name=mainTable" })
  mainTable?: Table;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=singleValue" })
  singleValue?: Value;

  @SpeakeasyMetadata({ data: "json, name=subtables", elemType: Table })
  subtables?: Table[];
}
