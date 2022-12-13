import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";


export enum RateModelCoverageLevelEnum {
    Child = "Child",
    Ee = "EE",
    EePlus1 = "EE+1",
    EePlusChild = "EE+Child",
    EePlusChildren = "EE+Children",
    EePlusSpouse = "EE+Spouse",
    Family = "Family",
    Pmpm = "PMPM",
    Spouse = "Spouse"
}


export class RateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=coverage_level" })
  coverageLevel: RateModelCoverageLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: TimePeriod;
}
