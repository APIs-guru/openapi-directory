import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketByTimePeriod } from "./bucketbytimeperiod";



export class BucketByTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationMillis" })
  durationMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: BucketByTimePeriod;
}
