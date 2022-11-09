import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerAdditionalFieldFields } from "./customeradditionalfieldfields";


export class CustomerAdditionalField extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_additional_field" })
  customerAdditionalField?: CustomerAdditionalFieldFields;
}
