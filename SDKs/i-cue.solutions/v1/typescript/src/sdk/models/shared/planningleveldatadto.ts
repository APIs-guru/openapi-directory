import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlanningLevelDataDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=historyValues" })
  historyValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
