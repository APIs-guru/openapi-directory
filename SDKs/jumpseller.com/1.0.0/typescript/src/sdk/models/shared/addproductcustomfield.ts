import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddProductCustomFieldFields } from "./addproductcustomfieldfields";



export class AddProductCustomField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: AddProductCustomFieldFields;
}
