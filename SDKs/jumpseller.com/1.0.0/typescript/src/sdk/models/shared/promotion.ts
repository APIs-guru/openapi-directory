import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PromotionFields } from "./promotionfields";



export class Promotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=promotion" })
  promotion?: PromotionFields;
}
