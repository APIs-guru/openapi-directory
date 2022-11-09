import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RunPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_time" })
  endTime: Date;

  @Metadata({ data: "json, name=start_time" })
  startTime: Date;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
