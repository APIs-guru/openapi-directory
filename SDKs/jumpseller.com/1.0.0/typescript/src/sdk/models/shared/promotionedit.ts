import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PromotionEditFields } from "./promotioneditfields";


export class PromotionEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=promotion" })
  promotion?: PromotionEditFields;
}
