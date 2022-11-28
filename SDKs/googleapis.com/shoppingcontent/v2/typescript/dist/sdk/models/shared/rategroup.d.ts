import { SpeakeasyBase } from "../../../internal/utils";
import { CarrierRate } from "./carrierrate";
import { Table } from "./table";
import { Value } from "./value";
export declare class RateGroup extends SpeakeasyBase {
    applicableShippingLabels?: string[];
    carrierRates?: CarrierRate[];
    mainTable?: Table;
    name?: string;
    singleValue?: Value;
    subtables?: Table[];
}
