import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CarrierRate } from "./carrierrate";
import { Table } from "./table";
import { Value } from "./value";
import { Table } from "./table";


export class RateGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicableShippingLabels" })
  applicableShippingLabels?: string[];

  @Metadata({ data: "json, name=carrierRates", elemType: shared.CarrierRate })
  carrierRates?: CarrierRate[];

  @Metadata({ data: "json, name=mainTable" })
  mainTable?: Table;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=singleValue" })
  singleValue?: Value;

  @Metadata({ data: "json, name=subtables", elemType: shared.Table })
  subtables?: Table[];
}
