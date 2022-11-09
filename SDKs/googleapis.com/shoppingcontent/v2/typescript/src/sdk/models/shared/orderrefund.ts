import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class OrderRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: Price;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
