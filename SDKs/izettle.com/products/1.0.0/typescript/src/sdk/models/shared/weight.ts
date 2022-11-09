import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WeightUnitEnum {
    Kg = "kg"
,    G = "g"
,    Oz = "oz"
,    Lb = "lb"
}


export class Weight extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit: WeightUnitEnum;

  @Metadata({ data: "json, name=weight" })
  weight: number;
}
