import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WeightUnitEnum {
    Kg = "kg",
    G = "g",
    Oz = "oz",
    Lb = "lb"
}
export declare class Weight extends SpeakeasyBase {
    unit: WeightUnitEnum;
    weight: number;
}
