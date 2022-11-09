import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BucketByActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityDataSourceId" })
  activityDataSourceId?: string;

  @Metadata({ data: "json, name=minDurationMillis" })
  minDurationMillis?: string;
}
