import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlanningLevelForecastResultData extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
