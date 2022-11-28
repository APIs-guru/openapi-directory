import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BucketBySession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minDurationMillis" })
  minDurationMillis?: string;
}
