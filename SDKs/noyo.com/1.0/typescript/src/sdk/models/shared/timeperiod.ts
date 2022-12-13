import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TimePeriodUnitEnum {
    Annual = "annual",
    Month = "month",
    SemiMonthly = "semi-monthly"
}


export class TimePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: TimePeriodUnitEnum;
}
