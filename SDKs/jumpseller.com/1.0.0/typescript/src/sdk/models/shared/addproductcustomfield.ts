import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddProductCustomFieldFields } from "./addproductcustomfieldfields";


export class AddProductCustomField extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: AddProductCustomFieldFields;
}
