import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BucketByActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityDataSourceId" })
  activityDataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=minDurationMillis" })
  minDurationMillis?: string;
}
