import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductCustomFieldFields } from "./productcustomfieldfields";



export class ProductCustomField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: ProductCustomFieldFields;
}
