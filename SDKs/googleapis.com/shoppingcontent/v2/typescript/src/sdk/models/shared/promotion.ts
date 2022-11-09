import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


export class Promotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=promotionAmount" })
  promotionAmount?: Amount;

  @Metadata({ data: "json, name=promotionId" })
  promotionId?: string;
}
