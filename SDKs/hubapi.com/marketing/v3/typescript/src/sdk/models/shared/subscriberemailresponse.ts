import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriberEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=vid" })
  vid: number;
}
