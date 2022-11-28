import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlanningLevelForecastResultData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
