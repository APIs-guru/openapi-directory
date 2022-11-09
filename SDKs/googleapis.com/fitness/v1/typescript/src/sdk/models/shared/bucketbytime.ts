import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketByTimePeriod } from "./bucketbytimeperiod";


export class BucketByTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationMillis" })
  durationMillis?: string;

  @Metadata({ data: "json, name=period" })
  period?: BucketByTimePeriod;
}
