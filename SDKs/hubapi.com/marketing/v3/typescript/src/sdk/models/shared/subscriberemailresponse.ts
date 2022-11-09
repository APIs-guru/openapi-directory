import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriberEmailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=vid" })
  vid: number;
}
