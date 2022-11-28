import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WeightUnitEnum {
    Kg = "kg",
    G = "g",
    Oz = "oz",
    Lb = "lb"
}


export class Weight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: WeightUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight: number;
}
