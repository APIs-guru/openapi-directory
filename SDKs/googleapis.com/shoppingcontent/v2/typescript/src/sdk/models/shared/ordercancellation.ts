import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderCancellation extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
