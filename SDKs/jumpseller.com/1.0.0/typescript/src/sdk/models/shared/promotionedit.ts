import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PromotionEditFields } from "./promotioneditfields";



export class PromotionEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=promotion" })
  promotion?: PromotionEditFields;
}
