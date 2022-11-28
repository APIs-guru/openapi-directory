import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



export class Promotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=promotionAmount" })
  promotionAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=promotionId" })
  promotionId?: string;
}
