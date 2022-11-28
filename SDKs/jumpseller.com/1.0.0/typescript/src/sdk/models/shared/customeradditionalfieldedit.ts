import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerAdditionalFieldEditFields } from "./customeradditionalfieldeditfields";



export class CustomerAdditionalFieldEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_additional_field" })
  customerAdditionalField?: CustomerAdditionalFieldEditFields;
}
