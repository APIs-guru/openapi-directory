import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BucketBySession extends SpeakeasyBase {
  @Metadata({ data: "json, name=minDurationMillis" })
  minDurationMillis?: string;
}
