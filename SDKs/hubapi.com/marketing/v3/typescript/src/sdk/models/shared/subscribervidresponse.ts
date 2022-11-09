import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriberVidResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=vid" })
  vid: number;
}
