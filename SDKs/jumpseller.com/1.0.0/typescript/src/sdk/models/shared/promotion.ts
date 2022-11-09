import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PromotionFields } from "./promotionfields";


export class Promotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=promotion" })
  promotion?: PromotionFields;
}
