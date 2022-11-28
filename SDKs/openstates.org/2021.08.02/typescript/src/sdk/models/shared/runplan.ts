import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RunPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
