import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriberVidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vid" })
  vid: number;
}
