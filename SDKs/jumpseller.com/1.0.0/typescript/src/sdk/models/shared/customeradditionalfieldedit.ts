import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerAdditionalFieldEditFields } from "./customeradditionalfieldeditfields";


export class CustomerAdditionalFieldEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_additional_field" })
  customerAdditionalField?: CustomerAdditionalFieldEditFields;
}
